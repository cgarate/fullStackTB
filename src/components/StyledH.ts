import styled from "styled-components";

export const StyledH = styled.h1<{ $padding?: number | string }>`
  padding: ${(props) => props.$padding};
  font-family: Helvetica;
  font-size: 1.5rem;
`;
