import { useEffect } from "react";
export const API_KEY = "AIzaSyAvzTNkInDNt1tGOOrClNQd7mGwisZsDDQ";
export const url = "https://image.tmdb.org/t/p/w500";

const maxChar = 13;
export const maxTitle = (string) => {
  if (string.length > maxChar) {
    string = string.substring(0, maxChar) + " . . .";
  }
  return string;
};

export function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}
