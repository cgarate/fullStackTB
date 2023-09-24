import { ChangeEvent } from "react";
import { Box } from "./Box";
import { VStack } from "./VStack";
import { StyledInput } from "./StyledInput";
import { StyledLabel } from "./StyledLabel";

type Props = {
  id: string;
  labelValue?: string;
  name: string;
  placeholder?: string;
  type?: "text" | "password";
  value?: HTMLInputElement["value"];
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({
  labelValue,
  onChange,
  value,
  id,
  name,
  type = "text",
  placeholder,
}: Props) => {
  return (
    <Box $padding="1rem">
      <VStack>
        <StyledLabel htmlFor={id}>{labelValue}</StyledLabel>
        <StyledInput
          placeholder={placeholder}
          type={type}
          id={id}
          name={name}
          onChange={onChange}
          value={value}
        />
      </VStack>
    </Box>
  );
};

export default Input;
Input.displayName = "Input";
