import { PersistentSubject } from "../classes/subject";
import db from "./db";
import { AppSettings } from "./settings/migrations";

type CommonAccount = {
  pubkey: string;
  relays?: string[];
  localSettings?: AppSettings;
};
export type LocalAccount = CommonAccount & {
  type: "local";
  readonly: false;
  secKey: ArrayBuffer;
  iv: Uint8Array;
};
export type PubkeyAccount = CommonAccount & {
  type: "pubkey";
  readonly: true;
};
export type ExtensionAccount = CommonAccount & {
  type: "extension";
  readonly: false;
};
export type SerialAccount = CommonAccount & {
  type: "serial";
  readonly: false;
};
export type AmberAccount = CommonAccount & {
  type: "amber";
  readonly: false;
};
export type NostrConnectAccount = CommonAccount & {
  type: "nostr-connect";
  clientSecretKey: string;
  signerRelays: string[];
  readonly: false;
};

export type Account =
  | ExtensionAccount
  | LocalAccount
  | NostrConnectAccount
  | SerialAccount
  | AmberAccount
  | PubkeyAccount;

class AccountService {
  loading = new PersistentSubject(true);
  accounts = new PersistentSubject<Account[]>([]);
  current = new PersistentSubject<Account | null>(null);
  isGhost = new PersistentSubject(false);

  constructor() {
    db.getAll("accounts").then((accounts) => {
      this.accounts.next(accounts);

      const lastAccount = localStorage.getItem("lastAccount");
      if (lastAccount && this.hasAccount(lastAccount)) {
        this.switchAccount(lastAccount);
      }

      this.loading.next(false);
    });
  }

  startGhost(pubkey: string) {
    const ghostAccount: Account = {
      type: "pubkey",
      pubkey,
      readonly: true,
    };

    const lastPubkey = this.current.value?.pubkey;
    if (lastPubkey && this.hasAccount(lastPubkey)) localStorage.setItem("lastAccount", lastPubkey);
    this.current.next(ghostAccount);
    this.isGhost.next(true);
  }
  stopGhost() {
    const lastAccount = localStorage.getItem("lastAccount");
    if (lastAccount && this.hasAccount(lastAccount)) {
      this.switchAccount(lastAccount);
    } else this.logout();
  }

  hasAccount(pubkey: string) {
    return this.accounts.value.some((account) => account.pubkey === pubkey);
  }
  addAccount(account: Account) {
    if (this.hasAccount(account.pubkey)) {
      // replace account
      this.accounts.next(this.accounts.value.map((acc) => (acc.pubkey === account.pubkey ? account : acc)));

      // if this is the current account. update it
      if (this.current.value?.pubkey === account.pubkey) {
        this.current.next(account);
        this.isGhost.next(false);
      }
    } else {
      // add account
      this.accounts.next(this.accounts.value.concat(account));
    }

    db.put("accounts", account);
  }
  removeAccount(pubkey: string) {
    this.accounts.next(this.accounts.value.filter((acc) => acc.pubkey !== pubkey));

    db.delete("accounts", pubkey);
  }

  updateAccountLocalSettings(pubkey: string, settings: AppSettings) {
    const account = this.accounts.value.find((acc) => acc.pubkey === pubkey);
    if (account) {
      const updated = { ...account, localSettings: settings };

      // update account
      this.addAccount(updated);
    }
  }

  switchAccount(pubkey: string) {
    const account = this.accounts.value.find((acc) => acc.pubkey === pubkey);
    if (account) {
      this.current.next(account);
      this.isGhost.next(false);
      localStorage.setItem("lastAccount", pubkey);
    }
  }

  logout(clear = true) {
    if (clear && this.current.value) {
      this.removeAccount(this.current.value.pubkey);
    }

    this.current.next(null);
    this.isGhost.next(false);
    localStorage.removeItem("lastAccount");
  }
}

const accountService = new AccountService();

if (import.meta.env.DEV) {
  // @ts-ignore
  window.identity = accountService;
}

export default accountService;
