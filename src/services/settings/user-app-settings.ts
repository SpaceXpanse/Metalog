import dayjs from "dayjs";

import { DraftNostrEvent, NostrEvent } from "../../types/nostr-event";

import SuperMap from "../../classes/super-map";
import { PersistentSubject } from "../../classes/subject";
import { AppSettings, defaultSettings, parseAppSettings } from "./migrations";
import replaceableEventLoaderService, { RequestOptions } from "../replaceable-event-requester";

const SETTING_EVENT_IDENTIFIER = "nostrudel-settings";

class UserAppSettings {
  private parsedSubjects = new SuperMap<string, PersistentSubject<AppSettings>>(
    () => new PersistentSubject<AppSettings>(defaultSettings),
  );
  getSubject(pubkey: string) {
    return this.parsedSubjects.get(pubkey);
  }
  requestAppSettings(pubkey: string, relays: string[], opts?: RequestOptions) {
    const sub = this.parsedSubjects.get(pubkey);
    const requestSub = replaceableEventLoaderService.requestEvent(
      relays,
      30078,
      pubkey,
      SETTING_EVENT_IDENTIFIER,
      opts,
    );
    sub.connectWithHandler(requestSub, (event, next) => next(parseAppSettings(event)));
    return sub;
  }

  receiveEvent(event: NostrEvent) {
    replaceableEventLoaderService.handleEvent(event);
  }

  buildAppSettingsEvent(settings: AppSettings): DraftNostrEvent {
    return {
      kind: 30078,
      tags: [["d", SETTING_EVENT_IDENTIFIER]],
      content: JSON.stringify(settings),
      created_at: dayjs().unix(),
    };
  }
}

const userAppSettings = new UserAppSettings();

if (import.meta.env.DEV) {
  // @ts-ignore
  window.userAppSettings = userAppSettings;
}

export default userAppSettings;
