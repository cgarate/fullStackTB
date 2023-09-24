import { Box } from "./components/Box";
import { StyledH1 } from "./components/StyledH1";
import MedianFromPrimes from "./features/getMedianFromPrimeNumbers/MedianFromPrimes";

const App = () => {
  return (
    <Box style={{ width: "75vw", height: "100vh" }}>
      <StyledH1 style={{ padding: "0 1rem" }}>Full Stack Challenge</StyledH1>
      <MedianFromPrimes />
    </Box>
  );
};

export default App;
App.displayName = "App";
