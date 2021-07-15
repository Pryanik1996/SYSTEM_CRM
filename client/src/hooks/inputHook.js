import { useState } from "react";

export default function useInput({ label = "", type = "text" }) {
  const [value, setValue] = useState("");

  const getValue = () => {
    return value;
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const clear = () => {
    setValue("");
  };



  return {
    tagAttrs: {
      value,
      type,
      label,
      onChange,
    },
    getValue,
    clear,
  };
}
