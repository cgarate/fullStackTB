import { useState } from "react";
import { Button } from "../components/Button";
import Input from "../components/Input";
import { VStack } from "../components/VStack";
import useInput from "../hooks/useInput";

const InputMedianPrimes = () => {
  const medianInput = useInput("");
  const [data, setData] = useState({});
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const onClickHandler = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `http://localhost:3000/median/${Number(medianInput.value)}`,
      );
      const data = await response.json();
      setData(data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <VStack>
      <Input
        placeholder="Enter a number to get prime numbers up to"
        labelValue="Calculate Median of Prime Numbers"
        onChange={medianInput.onChange}
        id="medianInput"
        name="medianInput"
        value={medianInput.value}
      />
      <Button onClick={onClickHandler} disabled={!medianInput.value}>
        GET MEDIAN
      </Button>
    </VStack>
  );
};

export default InputMedianPrimes;
InputMedianPrimes.displayName = "InputMedianPrimes";
