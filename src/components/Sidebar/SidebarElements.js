import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";
import { Link as LinkRouter } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

export const SidebarContainer = styled.aside`
  display: grid;
  align-items: center;
  background: hsl(276.5, 100%, 9%);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  transition: 0.3s ease-in-out;
  z-index: 999;
`;

export const CloseIcon = styled(FaTimes)`
  color: hsl(240, 100%, 98.6%);
`;

export const Icon = styled.div`
  background: transparent;
  font-size: 2rem;
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  outline: none;
  cursor: pointer;
`;

export const SidebarWrapper = styled.div`
  color: hsl(240, 100%, 98.6%);
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 5rem);
  text-align: center;

  @media screen and (max-width: 30em) {
    grid-template-rows: repeat(6, 3.75rem);
  }
`;

export const SidebarLink = styled(LinkScroll)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: hsl(240, 100%, 98.6%);
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    color: hsl(270, 50%, 60%);
    transition: 0.2s ease-in-out;
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const SidebarRouter = styled(LinkRouter)`
  background: hsl(240, 100%, 40.2%);
  color: hsl(240, 100%, 98.6%);
  font-size: 1rem;
  text-decoration: none;
  padding: 1rem 4rem;
  border: none;
  border-radius: 3.12rem;
  outline: none;
  white-space: nowrap;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: hsl(270, 50%, 60%);
    color: hsl(0, 0%, 3.1%);
  }
`;
