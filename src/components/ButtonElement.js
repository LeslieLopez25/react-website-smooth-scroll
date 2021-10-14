import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ dark }) =>
    dark ? "hsl(240,100%,98.6%)" : "hsl(240,100%,98.6%)"};
  background: ${({ primary }) =>
    primary ? "hsl(240,100%,40.2%)" : "hsl(276.5,100%,9%)"};
  font-size: ${({ fontBig }) => (fontBig ? "1.25rem" : "1rem")};
  padding: ${({ big }) => (big ? "0.87rem 3rem" : "0.75rem 1.87rem")};
  border: none;
  outline: none;
  border-radius: 3.12rem;
  white-space: nowrap;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) =>
      primary ? "hsl(270,50%,60%)" : "hsl(210.1,100%,50%)"};
  }
`;
