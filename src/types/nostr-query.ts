import { NostrEvent } from "./nostr-event";

export type NostrOutgoingEvent = ["EVENT", NostrEvent];
export type NostrOutgoingRequest = ["REQ", string, ...NostrQuery[]];
export type NostrOutgoingClose = ["CLOSE", string];

export type NostrOutgoingMessage = NostrOutgoingEvent | NostrOutgoingRequest | NostrOutgoingClose;

export type NostrQuery = {
  ids?: string[];
  authors?: string[];
  kinds?: number[];
  "#e"?: string[];
  "#a"?: string[];
  "#p"?: string[];
  "#d"?: string[];
  "#t"?: string[];
  "#g"?: string[];
  since?: number;
  until?: number;
  limit?: number;
  search?: string;
};

export type NostrRequestFilter = NostrQuery | NostrQuery[];
