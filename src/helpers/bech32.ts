import { bech32 } from "bech32";

export function encodeText(prefix: string, text: string) {
  const words = bech32.toWords(new TextEncoder().encode(text));
  return bech32.encode(prefix, words, Infinity);
}

export function decodeText(encoded: string) {
  const decoded = bech32.decode(encoded, Infinity);
  const text = new TextDecoder().decode(new Uint8Array(bech32.fromWords(decoded.words)));
  return {
    text,
    prefix: decoded.prefix,
  };
}
