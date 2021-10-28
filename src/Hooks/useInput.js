import { useState } from "react";

export const useInput = () => {
  const [value, setValue] = useState("");
  const reset = () => {
    setValue("");
  };
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const bind = {
    value: value,
    onChange: onChange,
  };
  return [value, bind, reset];
};
