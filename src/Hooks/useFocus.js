import { useEffect } from "react";

export const useFocus = (ref) => {
  useEffect(() => {
    ref.current.focus();
  }, [ref]);
};

export const useDefaultFocus = (inputRef) => {
  inputRef.current.focus();
};
