import { ChangeEvent, useState } from "react";

const useInput = (inputValue: HTMLInputElement["value"]) => {
  const [value, setValue] = useState(inputValue);
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value);

  return { onChange: onChangeHandler, value };
};

export default useInput;
