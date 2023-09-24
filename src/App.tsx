import { Box } from "./components/Box";
import { StyledH } from "./components/StyledH";
import InputMedianPrimes from "./features/InputMedianPrimes";

const App = () => {
  return (
    <Box $width="30vw" $height="100vh">
      <StyledH $padding="0 1rem">Full Stack Challenge</StyledH>
     <InputMedianPrimes />
    </Box>
  );
};

export default App;
App.displayName = "App";
