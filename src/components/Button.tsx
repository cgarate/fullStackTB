import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  background-color: #db9e24;
  border: 1px solid #e2b150;
  color: #ffffff;
  font-family: Helvetica;
  font-size: 1.25rem;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  margin: 0 1rem;
  transition: all 0.1s ease-in;

  &:hover {
    background-color: #e2b150;ƒ
    transform: translateY(-3px);
  }

  &:active {
    background-color: #9a6f19;
  }
`;
