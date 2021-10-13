import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import { FaHandHoldingUsd } from "react-icons/fa";

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ scrollNav }) =>
    scrollNav ? "hsl(276.5,100%,9%)" : "transparent"};
  font-size: 1rem;
  position: sticky;
  top: 0;
  margin-top: -5rem;
  height: 5rem;
  z-index: 10;

  @media screen and (max-width: 60rem) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 1.5rem;
  max-width: 68.75rem;
  width: 100%;
  height: 5rem;
  z-index: 1;
`;

export const NavLogo = styled(LinkRouter)`
  display: flex;
  justify-self: flex-start;
  align-items: center;
  color: hsl(240, 100%, 98.6%);
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  margin-left: 1.5rem;
  cursor: pointer;
`;

export const Money = styled(FaHandHoldingUsd)`
  position: relative;
  left: 0.312rem;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 48em) {
    display: block;
    color: hsl(240, 100%, 98.6%);
    font-size: 1.8rem;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  text-align: center;
  list-style: none;
  margin-right: -1.37rem;

  @media screen and (max-width: 49.12rem) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 5rem;
`;

export const NavLinks = styled(LinkScroll)`
  display: flex;
  align-items: center;
  color: hsl(240, 100%, 98.6%);
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid hsl(240, 100%, 40.2%);
  }

  &:hover {
    color: hsl(270, 50%, 60%);
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 48em) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkRouter)`
  background: hsl(240, 100%, 40.2%);
  color: hsl(240, 100%, 98.6%);
  font-size: 1rem;
  text-decoration: none;
  padding: 0.62rem 1.37rem;
  border: none;
  border-radius: 3.12rem;
  outline: none;
  white-space: nowrap;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background: hsl(270, 50%, 60%);
    color: hsl(0, 0%, 3.1%);
    transition: all 0.2s ease-in-out;
  }
`;
