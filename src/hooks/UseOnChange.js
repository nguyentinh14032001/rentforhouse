import { useState } from "react";

export default function useOnChange() {
  const [value, setValue] = useState(null);
  const handleOnChangeValue = (e) => {
    setValue(e.target.value);
  };
  return [value, handleOnChangeValue];
}
