import { ChangeEvent, useState } from "react";

const useInput = (inputValue: HTMLInputElement["value"]) => {
  const [value, setValue] = useState(inputValue);
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value);
  const resetHandler = () => setValue("");

  return { onChange: onChangeHandler, value, reset: resetHandler };
};

export default useInput;
