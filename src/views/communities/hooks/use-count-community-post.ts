import dayjs from "dayjs";
import { Kind } from "nostr-tools";

import { NostrEvent } from "../../../types/nostr-event";
import useEventCount from "../../../hooks/use-event-count";
import { getEventCoordinate } from "../../../helpers/nostr/events";

export default function useCountCommunityPosts(
  community: NostrEvent,
  since: number = dayjs().subtract(1, "month").unix(),
) {
  return useEventCount({ "#a": [getEventCoordinate(community)], kinds: [Kind.Text], since });
}
