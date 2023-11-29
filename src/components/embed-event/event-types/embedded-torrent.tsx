import { MouseEventHandler, useCallback } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardProps,
  Flex,
  Heading,
  Link,
  LinkBox,
  Spacer,
  Tag,
  Text,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

import { getNeventCodeWithRelays } from "../../../helpers/nip19";
import UserAvatarLink from "../../user-avatar-link";
import { UserLink } from "../../user-link";
import { NostrEvent } from "../../../types/nostr-event";
import Timestamp from "../../timestamp";
import Magnet from "../../icons/magnet";
import { getTorrentMagnetLink, getTorrentSize, getTorrentTitle } from "../../../helpers/nostr/torrents";
import { formatBytes } from "../../../helpers/number";
import { useNavigateInDrawer } from "../../../providers/drawer-sub-view-provider";
import HoverLinkOverlay from "../../hover-link-overlay";

export default function EmbeddedTorrent({ torrent, ...props }: Omit<CardProps, "children"> & { torrent: NostrEvent }) {
  const navigate = useNavigateInDrawer();
  const link = `/torrents/${getNeventCodeWithRelays(torrent.id)}`;

  const handleClick = useCallback<MouseEventHandler>(
    (e) => {
      e.preventDefault();
      navigate(link);
    },
    [navigate, link],
  );

  return (
    <Card as={LinkBox} {...props}>
      <CardHeader display="flex" gap="2" alignItems="center" p="2" pb="0" flexWrap="wrap">
        <Heading size="md">
          <HoverLinkOverlay as={RouterLink} to={link} onClick={handleClick}>
            {getTorrentTitle(torrent)}
          </HoverLinkOverlay>
        </Heading>
        <UserAvatarLink pubkey={torrent.pubkey} size="xs" />
        <UserLink pubkey={torrent.pubkey} isTruncated fontWeight="bold" fontSize="md" />
        <Spacer />
        <Timestamp timestamp={torrent.created_at} />
      </CardHeader>
      <CardBody p="2">
        <Text>Size: {formatBytes(getTorrentSize(torrent))}</Text>
        <Flex gap="2">
          <Text>Tags:</Text>
          {torrent.tags
            .filter((t) => t[0] === "t")
            .map(([_, tag]) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
        </Flex>
      </CardBody>
      <CardFooter p="2" display="flex" pt="0" gap="4">
        <Button
          as={Link}
          leftIcon={<Magnet boxSize={5} />}
          href={getTorrentMagnetLink(torrent)}
          isExternal
          variant="link"
        >
          Download torrent
        </Button>
      </CardFooter>
    </Card>
  );
}
