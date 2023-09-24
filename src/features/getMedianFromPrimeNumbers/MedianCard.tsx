import { Box } from "../../components/Box";
import { StyledH1 } from "../../components/StyledH1";
import { formatNumber } from "../../utils";
import { MedianData } from "./MedianFromPrimes";

type Props = MedianData & { limit: string };

const MedianCard = ({ median, middle, limit }: Props) => {
  return median ? (
    <Box>
      <StyledH1>Limit: {formatNumber(Number(limit))}</StyledH1>
      <StyledH1>Median: {formatNumber(median)}</StyledH1>
      <StyledH1>Middle Point(s): [{middle.join(",")}]</StyledH1>
    </Box>
  ) : null;
};

export default MedianCard;
MedianCard.displayName = "MedianCard";
