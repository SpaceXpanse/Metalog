import { useCallback, useEffect, useState } from "react";
import { Button, ButtonGroup, Flex, IconButton, Input, Link, useDisclosure } from "@chakra-ui/react";
import { useSearchParams, useNavigate } from "react-router-dom";

import { SEARCH_RELAYS } from "../../const";
import { safeDecode } from "../../helpers/nip19";
import { getMatchHashtag } from "../../helpers/regexp";
import { CommunityIcon, CopyToClipboardIcon, NotesIcon, QrCodeIcon } from "../../components/icons";
import QrScannerModal from "../../components/qr-scanner-modal";
import RelaySelectionButton from "../../components/relay-selection/relay-selection-button";
import RelaySelectionProvider from "../../providers/relay-selection-provider";
import VerticalPageLayout from "../../components/vertical-page-layout";
import User01 from "../../components/icons/user-01";
import Feather from "../../components/icons/feather";
import ProfileSearchResults from "./profile-results";
import NoteSearchResults from "./note-results";
import ArticleSearchResults from "./article-results";
import CommunitySearchResults from "./community-results";
import PeopleListProvider from "../../providers/people-list-provider";
import PeopleListSelection from "../../components/people-list-selection/people-list-selection";

export function SearchPage() {
  const navigate = useNavigate();
  const qrScannerModal = useDisclosure();
  const [searchParams, setSearchParams] = useSearchParams();
  const mergeSearchParams = useCallback(
    (params: Record<string, any>) => {
      setSearchParams(
        (p) => {
          const newParams = new URLSearchParams(p);
          for (const [key, value] of Object.entries(params)) newParams.set(key, value);
          return newParams;
        },
        { replace: true },
      );
    },
    [setSearchParams],
  );

  const [searchInput, setSearchInput] = useState(searchParams.get("q") ?? "");

  const type = searchParams.get("type") ?? "users";
  const search = searchParams.get("q");

  // update the input value when search changes
  useEffect(() => {
    setSearchInput(searchParams.get("q") ?? "");
  }, [searchParams]);

  const handleSearchText = (text: string) => {
    const cleanText = text.trim();

    if (cleanText.startsWith("nostr:") || cleanText.startsWith("web+nostr:") || safeDecode(text)) {
      navigate({ pathname: "/l/" + encodeURIComponent(text) }, { replace: true });
      return;
    }

    const hashTagMatch = getMatchHashtag().exec(cleanText);
    if (hashTagMatch) {
      navigate({ pathname: "/t/" + hashTagMatch[2].toLocaleLowerCase() }, { replace: true });
      return;
    }

    mergeSearchParams({ q: cleanText });
  };

  const readClipboard = useCallback(async () => {
    handleSearchText(await navigator.clipboard.readText());
  }, []);

  // set the search when the form is submitted
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    handleSearchText(searchInput);
  };

  let SearchResults = ProfileSearchResults;
  switch (type) {
    case "users":
      SearchResults = ProfileSearchResults;
      break;
    case "notes":
      SearchResults = NoteSearchResults;
      break;
    case "articles":
      SearchResults = ArticleSearchResults;
      break;
    case "communities":
      SearchResults = CommunitySearchResults;
      break;
  }

  return (
    <VerticalPageLayout>
      <QrScannerModal isOpen={qrScannerModal.isOpen} onClose={qrScannerModal.onClose} onData={handleSearchText} />

      <form onSubmit={handleSubmit}>
        <Flex gap="2" wrap="wrap">
          <Flex gap="2" grow={1}>
            <IconButton onClick={qrScannerModal.onOpen} icon={<QrCodeIcon />} aria-label="Qr Scanner" />
            {!!navigator.clipboard?.readText && (
              <IconButton onClick={readClipboard} icon={<CopyToClipboardIcon />} aria-label="Read clipboard" />
            )}
            <Input type="search" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
            <Button type="submit">Search</Button>
          </Flex>
        </Flex>
      </form>

      <Flex gap="2">
        <PeopleListSelection size="sm" />
        <ButtonGroup size="sm" isAttached variant="outline" flexWrap="wrap">
          <Button
            leftIcon={<User01 />}
            colorScheme={type === "users" ? "primary" : undefined}
            onClick={() => mergeSearchParams({ type: "users" })}
          >
            Users
          </Button>
          <Button
            leftIcon={<NotesIcon />}
            colorScheme={type === "notes" ? "primary" : undefined}
            onClick={() => mergeSearchParams({ type: "notes" })}
          >
            Notes
          </Button>
          <Button
            leftIcon={<Feather />}
            colorScheme={type === "articles" ? "primary" : undefined}
            onClick={() => mergeSearchParams({ type: "articles" })}
          >
            Articles
          </Button>
          <Button
            leftIcon={<CommunityIcon />}
            colorScheme={type === "communities" ? "primary" : undefined}
            onClick={() => mergeSearchParams({ type: "communities" })}
          >
            Communities
          </Button>
        </ButtonGroup>
        <RelaySelectionButton ml="auto" size="sm" />
      </Flex>

      <Flex direction="column" gap="4">
        {search ? (
          <SearchResults search={search} />
        ) : (
          <Link isExternal href="https://nostr.band" color="blue.500" mx="auto">
            Advanced Search
          </Link>
        )}
      </Flex>
    </VerticalPageLayout>
  );
}

export default function SearchView() {
  return (
    <RelaySelectionProvider overrideDefault={SEARCH_RELAYS}>
      <PeopleListProvider initList="global">
        <SearchPage />
      </PeopleListProvider>
    </RelaySelectionProvider>
  );
}
