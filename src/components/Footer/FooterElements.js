import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaHandHoldingUsd } from "react-icons/fa";

export const FooterContainer = styled.footer`
  background-color: hsl(0, 0%, 3.1%);
`;

export const FooterWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  padding: 3rem 1.5rem;
  max-width: 68.75rem;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 51.25em) {
    padding-top: 2rem;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 51.25rem) {
    flex-direction: column;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: hsl(240, 100%, 98.6%);
  text-align: left;
  margin: 1rem;
  width: 10rem;
  box-sizing: border-box;

  @media screen and (max-width: 26.25em) {
    margin: 0;
    padding: 0.62rem;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h1`
  font-size: 0.87rem;
  margin-bottom: 1rem;
`;

export const FooterLink = styled(Link)`
  color: hsl(240, 100%, 98.6%);
  font-size: 0.87rem;
  text-decoration: none;
  margin-bottom: 0.5rem;

  &:hover {
    color: hsl(270, 50%, 60%);
    transition: 0.3s ease-out;
  }
`;

export const SocialMedia = styled.section`
  max-width: 62.5rem;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 68.75rem;
  margin: 2.5rem auto 0 auto;

  @media screen and (max-width: 51.25rem) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  display: flex;
  justify-self: start;
  align-items: center;
  color: hsl(240, 100%, 98.6%);
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  margin-bottom: 1rem;
  cursor: pointer;
`;

export const Money = styled(FaHandHoldingUsd)`
  color: hsl(210.1, 100%, 50%);
  position: relative;
  left: 0.312rem;
`;

export const WebsiteRights = styled.small`
  color: hsl(240, 100%, 98.6%);
  margin-bottom: 0.5rem;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 15rem;
`;

export const SocialIconLink = styled.a`
  color: hsl(210.1, 100%, 50%);
  font-size: 1.5rem;
`;
