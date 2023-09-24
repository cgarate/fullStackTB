import { ChangeEvent, useState } from "react";
import { Box } from "../../components/Box";
import InputLimit from "./InputLimit";
import useInput from "../../hooks/useInput";
import { HStack } from "../../components/HStack";
import { StyledH1 } from "../../components/StyledH1";
import MedianCard from "./MedianCard";
import { Text } from "../../components/Text";

export type MedianData = {
  median: number;
  middle: number[];
  limit: string;
};

const MedianFromPrimes = () => {
  const [data, setData] = useState<MedianData>();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const medianInputState = useInput("");

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setError(null);
    medianInputState.onChange(event);
    setData(null)
  };

  const onClickHandler = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `http://localhost:3000/median/${medianInputState.value}`,
      );
      const data = await response.json();
      if (response.ok) {
        setData(data);
      } else {
        throw new Error(data.errors[0].msg);
      }
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
      medianInputState.reset();
    }
  };
  return (
    <Box>
      <HStack style={{ gap: "2rem" }}>
        <InputLimit
          buttonOnClick={onClickHandler}
          inputOnChange={onChangeHandler}
          inputValue={medianInputState.value}
        />
        <Box
          style={{
            border: "1px solid #CCDDCC",
            flex: 1,
            padding: "1rem",
            borderRadius: "9px",
          }}>
          {isLoading ? (
            <StyledH1>Loading...</StyledH1>
          ) : (
            <MedianCard
              median={data?.median}
              middle={data?.middle}
              limit={data?.limit}
            />
          )}
        </Box>
      </HStack>
      {error ? (
        <Box style={{ padding: "0 1rem" }}>
          <Text style={{ color: "red", fontSize: "0.75rem" }}>
            {String(error)}
          </Text>
        </Box>
      ) : null}
    </Box>
  );
};

export default MedianFromPrimes;
MedianFromPrimes.displayName = "MedianFromPrimes";
