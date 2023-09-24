import styled from "styled-components";

export const Box = styled.div<{ $width?: number | string; $height?: number | string, $padding?: number | string }>`
  box-sizing: border-box;
  padding: ${(props) => props.$padding};
  height: ${(props) => props.$height};
  width: ${(props) => props.$width};
`;