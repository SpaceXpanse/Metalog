import { createIcon, IconProps } from "@chakra-ui/icons";

const defaultProps: IconProps = { fontSize: "1.2em" };

export const GlobalIcon = createIcon({
  displayName: "global-icon",
  d: "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-2.29-2.333A17.9 17.9 0 0 1 8.027 13H4.062a8.008 8.008 0 0 0 5.648 6.667zM10.03 13c.151 2.439.848 4.73 1.97 6.752A15.905 15.905 0 0 0 13.97 13h-3.94zm9.908 0h-3.965a17.9 17.9 0 0 1-1.683 6.667A8.008 8.008 0 0 0 19.938 13zM4.062 11h3.965A17.9 17.9 0 0 1 9.71 4.333 8.008 8.008 0 0 0 4.062 11zm5.969 0h3.938A15.905 15.905 0 0 0 12 4.248 15.905 15.905 0 0 0 10.03 11zm4.259-6.667A17.9 17.9 0 0 1 15.973 11h3.965a8.008 8.008 0 0 0-5.648-6.667z",
  defaultProps,
});

export const HomeIcon = createIcon({
  displayName: "HomeIcon",
  d: "M19 21H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9a1 1 0 0 1-1 1zM6 19h12V9.157l-6-5.454-6 5.454V19z",
  defaultProps,
});

export const FeedIcon = createIcon({
  displayName: "FeedIcon",
  d: "M16 18v2H5v-2h11zm5-7v2H3v-2h18zm-2-7v2H8V4h11z",
  defaultProps,
});

export const MoreIcon = createIcon({
  displayName: "MoreIcon",
  d: "M4.5 10.5c-.825 0-1.5.675-1.5 1.5s.675 1.5 1.5 1.5S6 12.825 6 12s-.675-1.5-1.5-1.5zm15 0c-.825 0-1.5.675-1.5 1.5s.675 1.5 1.5 1.5S21 12.825 21 12s-.675-1.5-1.5-1.5zm-7.5 0c-.825 0-1.5.675-1.5 1.5s.675 1.5 1.5 1.5 1.5-.675 1.5-1.5-.675-1.5-1.5-1.5z",
  defaultProps,
});

export const CodeIcon = createIcon({
  displayName: "CodeIcon",
  d: `M23 12l-7.071 7.071-1.414-1.414L20.172 12l-5.657-5.657 1.414-1.414L23 12zM3.828 12l5.657 5.657-1.414 1.414L1 12l7.071-7.071 1.414 1.414L3.828 12z`,
  defaultProps,
});

export const SettingsIcon = createIcon({
  displayName: "SettingsIcon",
  d: "M8.686 4l2.607-2.607a1 1 0 0 1 1.414 0L15.314 4H19a1 1 0 0 1 1 1v3.686l2.607 2.607a1 1 0 0 1 0 1.414L20 15.314V19a1 1 0 0 1-1 1h-3.686l-2.607 2.607a1 1 0 0 1-1.414 0L8.686 20H5a1 1 0 0 1-1-1v-3.686l-2.607-2.607a1 1 0 0 1 0-1.414L4 8.686V5a1 1 0 0 1 1-1h3.686zM6 6v3.515L3.515 12 6 14.485V18h3.515L12 20.485 14.485 18H18v-3.515L20.485 12 18 9.515V6h-3.515L12 3.515 9.515 6H6zm6 10a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
  defaultProps,
});

export const LogoutIcon = createIcon({
  displayName: "LogoutIcon",
  d: "M4 18h2v2h12V4H6v2H4V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3zm2-7h7v2H6v3l-5-4 5-4v3z",
  defaultProps,
});

export const ProfileIcon = createIcon({
  displayName: "ProfileIcon",
  d: "M4 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H4zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z",
  defaultProps,
});

export const ClipboardIcon = createIcon({
  displayName: "ClipboardIcon",
  d: "M7 4V2h10v2h3.007c.548 0 .993.445.993.993v16.014a.994.994 0 0 1-.993.993H3.993A.994.994 0 0 1 3 21.007V4.993C3 4.445 3.445 4 3.993 4H7zm0 2H5v14h14V6h-2v2H7V6zm2-2v2h6V4H9z",
  defaultProps,
});

export const TrashIcon = createIcon({
  displayName: "TrashIcon",
  d: "M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3zm1 2H6v12h12V8zm-9 3h2v6H9v-6zm4 0h2v6h-2v-6zM9 4v2h6V4H9z",
  defaultProps,
});

export const AddIcon = createIcon({
  displayName: "AddIcon",
  d: "M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z",
  defaultProps,
});

export const ArrowDownSIcon = createIcon({
  displayName: "ArrowDownSIcon",
  d: "M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z",
  defaultProps,
});

export const ArrowUpSIcon = createIcon({
  displayName: "ArrowUpSIcon",
  d: "M12 10.828l-4.95 4.95-1.414-1.414L12 8l6.364 6.364-1.414 1.414z",
  defaultProps,
});

export const ArrowLeftSIcon = createIcon({
  displayName: "ArrowLeftSIcon",
  d: "M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z",
  defaultProps,
});

export const ArrowRightSIcon = createIcon({
  displayName: "ArrowRightSIcon",
  d: "M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z",
  defaultProps,
});

export const LinkItem = createIcon({
  displayName: "LinkItem",
  d: "M18.364 15.536L16.95 14.12l1.414-1.414a5 5 0 1 0-7.071-7.071L9.879 7.05 8.464 5.636 9.88 4.222a7 7 0 0 1 9.9 9.9l-1.415 1.414zm-2.828 2.828l-1.415 1.414a7 7 0 0 1-9.9-9.9l1.415-1.414L7.05 9.88l-1.414 1.414a5 5 0 1 0 7.071 7.071l1.414-1.414 1.415 1.414zm-.708-10.607l1.415 1.415-7.071 7.07-1.415-1.414 7.071-7.07z",
  defaultProps,
});

export const LightningIcon = createIcon({
  displayName: "LightningIcon",
  d: "M13 10h7l-9 13v-9H4l9-13z",
  defaultProps: { ...defaultProps, color: "yellow.400" },
});

export const RelayIcon = createIcon({
  displayName: "RelayIcon",
  d: "M11 14v-3h2v3h5a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h5zM2.51 8.837C3.835 4.864 7.584 2 12 2s8.166 2.864 9.49 6.837l-1.898.632a8.003 8.003 0 0 0-15.184 0l-1.897-.632zm3.796 1.265a6.003 6.003 0 0 1 11.388 0l-1.898.633a4.002 4.002 0 0 0-7.592 0l-1.898-.633z",
  defaultProps,
});

export const ExternalLinkIcon = createIcon({
  displayName: "ExternalLinkIcon",
  d: "M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v8h-2V6.413l-7.793 7.794-1.414-1.414L17.585 5H13V3h8z",
  defaultProps,
});

export const SearchIcon = createIcon({
  displayName: "SearchIcon",
  d: "M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z",
  defaultProps,
});

export const RepostIcon = createIcon({
  displayName: "RepostIcon",
  d: "M13.12 17.023l-4.199-2.29a4 4 0 1 1 0-5.465l4.2-2.29a4 4 0 1 1 .959 1.755l-4.2 2.29a4.008 4.008 0 0 1 0 1.954l4.199 2.29a4 4 0 1 1-.959 1.755zM6 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm11-6a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
  defaultProps,
});

export const ReplyIcon = createIcon({
  displayName: "ReplyIcon",
  d: "M11 20L1 12L11 4V9C16.5228 9 21 13.4772 21 19C21 19.2727 20.9891 19.5428 20.9677 19.81C19.5055 17.0364 16.6381 15.119 13.313 15.0053L13 15H10.9999L11 20ZM8.99986 13H10.9999L13.0341 13.0003L13.3814 13.0065C14.6657 13.0504 15.9053 13.3165 17.0568 13.7734C15.5898 12.0749 13.4204 11 11 11H9V8.16125L4.20156 12L8.99992 15.8387L8.99986 13Z",
  defaultProps,
});

export const QuoteRepostIcon = createIcon({
  displayName: "QuoteRepostIcon",
  d: "M19.4167 6.67891C20.4469 7.77257 21.0001 9 21.0001 10.9897C21.0001 14.4891 18.5436 17.6263 14.9695 19.1768L14.0768 17.7992C17.4121 15.9946 18.0639 13.6539 18.3245 12.178C17.7875 12.4557 17.0845 12.5533 16.3954 12.4895C14.591 12.3222 13.1689 10.8409 13.1689 9C13.1689 7.067 14.7359 5.5 16.6689 5.5C17.742 5.5 18.7681 5.99045 19.4167 6.67891ZM9.41669 6.67891C10.4469 7.77257 11.0001 9 11.0001 10.9897C11.0001 14.4891 8.54359 17.6263 4.96951 19.1768L4.07682 17.7992C7.41206 15.9946 8.06392 13.6539 8.32447 12.178C7.78747 12.4557 7.08452 12.5533 6.39539 12.4895C4.59102 12.3222 3.16895 10.8409 3.16895 9C3.16895 7.067 4.73595 5.5 6.66895 5.5C7.742 5.5 8.76814 5.99045 9.41669 6.67891Z",
  defaultProps,
});

export const VerifiedIcon = createIcon({
  displayName: "VerifiedIcon",
  d: "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-.997-6l7.07-7.071-1.414-1.414-5.656 5.657-2.829-2.829-1.414 1.414L11.003 16z",
  defaultProps,
});

export const VerificationFailed = createIcon({
  displayName: "VerificationFailed",
  d: "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-7v2h2v-2h-2zm0-8v6h2V7h-2z",
  defaultProps,
});

export const VerificationMissing = createIcon({
  displayName: "VerificationFailed",
  d: "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-7v2h2v-2h-2zm2-1.645A3.502 3.502 0 0 0 12 6.5a3.501 3.501 0 0 0-3.433 2.813l1.962.393A1.5 1.5 0 1 1 12 11.5a1 1 0 0 0-1 1V14h2v-.645z",
  defaultProps,
});

export const SpyIcon = createIcon({
  displayName: "SpyIcon",
  d: "M17 13a4 4 0 1 1-4 4h-2a4 4 0 1 1-.535-2h3.07A3.998 3.998 0 0 1 17 13zM7 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm10 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM16 3a4 4 0 0 1 4 4v3h2v2H2v-2h2V7a4 4 0 0 1 4-4h8zm0 2H8c-1.054 0-2 .95-2 2v3h12V7c0-1.054-.95-2-2-2z",
  defaultProps,
});

export const KeyIcon = createIcon({
  displayName: "KeyIcon",
  d: "M10.758 11.828l7.849-7.849 1.414 1.414-1.414 1.415 2.474 2.474-1.414 1.415-2.475-2.475-1.414 1.414 2.121 2.121-1.414 1.415-2.121-2.122-2.192 2.192a5.002 5.002 0 0 1-7.708 6.294 5 5 0 0 1 6.294-7.708zm-.637 6.293A3 3 0 1 0 5.88 13.88a3 3 0 0 0 4.242 4.242z",
  defaultProps,
});

export const CheckIcon = createIcon({
  displayName: "CheckIcon",
  d: "M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z",
  defaultProps,
});

export const NotificationIcon = createIcon({
  displayName: "NotificationIcon",
  d: "M5 18h14v-6.969C19 7.148 15.866 4 12 4s-7 3.148-7 7.031V18zm7-16c4.97 0 9 4.043 9 9.031V20H3v-8.969C3 6.043 7.03 2 12 2zM9.5 21h5a2.5 2.5 0 1 1-5 0z",
  defaultProps,
});

export const UndoIcon = createIcon({
  displayName: "UndoIcon",
  d: "M5.828 7l2.536 2.536L6.95 10.95 2 6l4.95-4.95 1.414 1.414L5.828 5H13a8 8 0 1 1 0 16H4v-2h9a6 6 0 1 0 0-12H5.828z",
  defaultProps,
});

export const LikeIcon = createIcon({
  displayName: "LikeIcon",
  d: "M14.6 8H21a2 2 0 0 1 2 2v2.104a2 2 0 0 1-.15.762l-3.095 7.515a1 1 0 0 1-.925.619H2a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1h3.482a1 1 0 0 0 .817-.423L11.752.85a.5.5 0 0 1 .632-.159l1.814.907a2.5 2.5 0 0 1 1.305 2.853L14.6 8zM7 10.588V19h11.16L21 12.104V10h-6.4a2 2 0 0 1-1.938-2.493l.903-3.548a.5.5 0 0 0-.261-.571l-.661-.33-4.71 6.672c-.25.354-.57.644-.933.858zM5 11H3v8h2v-8z",
  defaultProps,
});

export const DislikeIcon = createIcon({
  displayName: "DislikeIcon",
  d: "M9.4 16H3a2 2 0 0 1-2-2v-2.104a2 2 0 0 1 .15-.762L4.246 3.62A1 1 0 0 1 5.17 3H22a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-3.482a1 1 0 0 0-.817.423l-5.453 7.726a.5.5 0 0 1-.632.159L9.802 22.4a2.5 2.5 0 0 1-1.305-2.853L9.4 16zm7.6-2.588V5H5.84L3 11.896V14h6.4a2 2 0 0 1 1.938 2.493l-.903 3.548a.5.5 0 0 0 .261.571l.661.33 4.71-6.672c.25-.354.57-.644.933-.858zM19 13h2V5h-2v8z",
  defaultProps,
});

export const QrCodeIcon = createIcon({
  displayName: "QrCodeIcon",
  d: "M16 17v-1h-3v-3h3v2h2v2h-1v2h-2v2h-2v-3h2v-1h1zm5 4h-4v-2h2v-2h2v4zM3 3h8v8H3V3zm2 2v4h4V5H5zm8-2h8v8h-8V3zm2 2v4h4V5h-4zM3 13h8v8H3v-8zm2 2v4h4v-4H5zm13-2h3v2h-3v-2zM6 6h2v2H6V6zm0 10h2v2H6v-2zM16 6h2v2h-2V6z",
  defaultProps,
});

export const ChatIcon = createIcon({
  displayName: "ChatIcon",
  d: "M10 3h4a8 8 0 1 1 0 16v3.5c-5-2-12-5-12-11.5a8 8 0 0 1 8-8zm2 14h2a6 6 0 1 0 0-12h-4a6 6 0 0 0-6 6c0 3.61 2.462 5.966 8 8.48V17z",
  defaultProps,
});

export const UnlockIcon = createIcon({
  displayName: "UnlockIcon",
  d: "M7 10h13a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h1V9a7 7 0 0 1 13.262-3.131l-1.789.894A5 5 0 0 0 7 9v1zm-2 2v8h14v-8H5zm5 3h4v2h-4v-2z",
  defaultProps,
});

export const ImageIcon = createIcon({
  displayName: "ImageIcon",
  d: "M4.828 21l-.02.02-.021-.02H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H4.828zM20 15V5H4v14L14 9l6 6zm0 2.828l-6-6L6.828 19H20v-1.172zM8 11a2 2 0 1 1 0-4 2 2 0 0 1 0 4z",
  defaultProps,
});

export const CameraIcon = createIcon({
  displayName: "CameraIcon",
  d: "M9.828 5l-2 2H4v12h16V7h-3.828l-2-2H9.828zM9 3h6l2 2h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4l2-2zm3 15a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0-2a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z",
  defaultProps,
});

export const PlusCircleIcon = createIcon({
  displayName: "PlusCircleIcon",
  d: "M11 11V7h2v4h4v2h-4v4h-2v-4H7v-2h4zm1 11C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z",
  defaultProps,
});

export const GithubIcon = createIcon({
  displayName: "GithubIcon",
  d: "M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0",
  defaultProps,
});

export const ToolsIcon = createIcon({
  displayName: "ToolsIcon",
  d: "M5.32894 3.27158C6.56203 2.8332 7.99181 3.10749 8.97878 4.09446C10.0997 5.21537 10.3014 6.90741 9.58382 8.23385L20.2925 18.9437L18.8783 20.3579L8.16933 9.64875C6.84277 10.3669 5.1502 10.1654 4.02903 9.04421C3.04178 8.05696 2.76761 6.62665 3.20652 5.39332L5.44325 7.63C6.02903 8.21578 6.97878 8.21578 7.56457 7.63C8.15035 7.04421 8.15035 6.09446 7.56457 5.50868L5.32894 3.27158ZM15.6963 5.15512L18.8783 3.38736L20.2925 4.80157L18.5247 7.98355L16.757 8.3371L14.6356 10.4584L13.2214 9.04421L15.3427 6.92289L15.6963 5.15512ZM8.97878 13.2868L10.393 14.7011L5.08969 20.0044C4.69917 20.3949 4.066 20.3949 3.67548 20.0044C3.31285 19.6417 3.28695 19.0699 3.59777 18.6774L3.67548 18.5902L8.97878 13.2868Z",
  defaultProps,
});

export const EditIcon = createIcon({
  displayName: "EditIcon",
  d: "M6.41421 15.89L16.5563 5.74786L15.1421 4.33365L5 14.4758V15.89H6.41421ZM7.24264 17.89H3V13.6474L14.435 2.21233C14.8256 1.8218 15.4587 1.8218 15.8492 2.21233L18.6777 5.04075C19.0682 5.43128 19.0682 6.06444 18.6777 6.45497L7.24264 17.89ZM3 19.89H21V21.89H3V19.89Z",
  defaultProps,
});

export const AtIcon = createIcon({
  displayName: "AtIcon",
  d: "M20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C13.6418 20 15.1681 19.5054 16.4381 18.6571L17.5476 20.3214C15.9602 21.3818 14.0523 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12V13.5C22 15.433 20.433 17 18.5 17C17.2958 17 16.2336 16.3918 15.6038 15.4659C14.6942 16.4115 13.4158 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C13.1258 7 14.1647 7.37209 15.0005 8H17V13.5C17 14.3284 17.6716 15 18.5 15C19.3284 15 20 14.3284 20 13.5V12ZM12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9Z",
  defaultProps,
});

export const LiveStreamIcon = createIcon({
  displayName: "LiveStreamIcon",
  d: "M16 4C16.5523 4 17 4.44772 17 5V9.2L22.2133 5.55071C22.4395 5.39235 22.7513 5.44737 22.9096 5.6736C22.9684 5.75764 23 5.85774 23 5.96033V18.0397C23 18.3158 22.7761 18.5397 22.5 18.5397C22.3974 18.5397 22.2973 18.5081 22.2133 18.4493L17 14.8V19C17 19.5523 16.5523 20 16 20H2C1.44772 20 1 19.5523 1 19V5C1 4.44772 1.44772 4 2 4H16ZM15 6H3V18H15V6ZM7.4 8.82867C7.47607 8.82867 7.55057 8.85036 7.61475 8.8912L11.9697 11.6625C12.1561 11.7811 12.211 12.0284 12.0924 12.2148C12.061 12.2641 12.0191 12.306 11.9697 12.3375L7.61475 15.1088C7.42837 15.2274 7.18114 15.1725 7.06254 14.9861C7.02169 14.9219 7 14.8474 7 14.7713V9.22867C7 9.00776 7.17909 8.82867 7.4 8.82867ZM21 8.84131L17 11.641V12.359L21 15.1587V8.84131Z",
  defaultProps,
});

export const ImageGridTimelineIcon = createIcon({
  displayName: "ImageGridTimelineIcon",
  d: "M21 3C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21ZM11 13H4V19H11V13ZM20 13H13V19H20V13ZM11 5H4V11H11V5ZM20 5H13V11H20V5Z",
  defaultProps,
});

export const TextTimelineIcon = createIcon({
  displayName: "ImageGridTimeline",
  d: "M8 4H21V6H8V4ZM4.5 6.5C3.67157 6.5 3 5.82843 3 5C3 4.17157 3.67157 3.5 4.5 3.5C5.32843 3.5 6 4.17157 6 5C6 5.82843 5.32843 6.5 4.5 6.5ZM4.5 13.5C3.67157 13.5 3 12.8284 3 12C3 11.1716 3.67157 10.5 4.5 10.5C5.32843 10.5 6 11.1716 6 12C6 12.8284 5.32843 13.5 4.5 13.5ZM4.5 20.4C3.67157 20.4 3 19.7284 3 18.9C3 18.0716 3.67157 17.4 4.5 17.4C5.32843 17.4 6 18.0716 6 18.9C6 19.7284 5.32843 20.4 4.5 20.4ZM8 11H21V13H8V11ZM8 18H21V20H8V18Z",
  defaultProps,
});

export const MapIcon = createIcon({
  displayName: "MapIcon",
  d: "M4 6.14286V18.9669L9.06476 16.7963L15.0648 19.7963L20 17.6812V4.85714L21.303 4.2987C21.5569 4.18992 21.8508 4.30749 21.9596 4.56131C21.9862 4.62355 22 4.69056 22 4.75827V19L15 22L9 19L2.69696 21.7013C2.44314 21.8101 2.14921 21.6925 2.04043 21.4387C2.01375 21.3765 2 21.3094 2 21.2417V7L4 6.14286ZM16.2426 11.2426L12 15.4853L7.75736 11.2426C5.41421 8.89949 5.41421 5.10051 7.75736 2.75736C10.1005 0.414214 13.8995 0.414214 16.2426 2.75736C18.5858 5.10051 18.5858 8.89949 16.2426 11.2426ZM12 12.6569L14.8284 9.82843C16.3905 8.26633 16.3905 5.73367 14.8284 4.17157C13.2663 2.60948 10.7337 2.60948 9.17157 4.17157C7.60948 5.73367 7.60948 8.26633 9.17157 9.82843L12 12.6569Z",
  defaultProps,
});
