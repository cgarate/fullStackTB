import { ChangeEvent } from "react";
import { Button } from "../../components/Button";
import Input from "../../components/Input";
import { VStack } from "../../components/VStack";

type Props = {
  buttonOnClick: () => void;
  inputOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
  inputValue: HTMLInputElement["value"];
};

const InputLimit = ({ buttonOnClick, inputOnChange, inputValue }: Props) => {
  return (
    <VStack style={{flex: 1}}>
      <Input
        placeholder="Enter a number to get prime numbers up to"
        labelValue="Calculate Median of Prime Numbers"
        onChange={inputOnChange}
        id="medianInput"
        name="medianInput"
        value={inputValue}
      />
      <Button onClick={buttonOnClick} disabled={!inputValue}>
        GET MEDIAN
      </Button>
    </VStack>
  );
};

export default InputLimit;
InputLimit.displayName = "InputLimit";
