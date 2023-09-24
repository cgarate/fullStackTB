import styled from "styled-components";

export const StyledInput = styled.input`
  color: black;
  min-height: 35px;
  font-family: Helvetica;
  font-size: 15px;
  border: 1px solid #cccccc;
  border-radius: 5px;
  padding: 0.25rem 0.5rem;
  margin-top: 0.5rem;

  &:focus {
    border-color: cadetBlue;
    border-width: 2px;
  }
`;