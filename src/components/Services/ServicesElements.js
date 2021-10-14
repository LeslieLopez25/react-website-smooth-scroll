import styled from "styled-components";

export const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: hsl(276.5, 100%, 9%);
  height: 50rem;

  @media screen and (max-width: 48px) {
    height: 68.75rem;
  }

  @media screen and (max-width: 30em) {
    height: 81.25rem;
  }
`;

export const ServicesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;
  align-items: center;
  margin: 0 auto;
  padding: 0 3.12rem;
  max-width: 62.5rem;

  @media screen and (max-width: 62.5em) {
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 48em) {
    grid-template-columns: 1fr;
    padding: 0 1.25rem;
  }
`;

export const ServicesCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: hsl(240, 100%, 98.6%);
  padding: 1.87rem;
  max-height: 21.25rem;
  border-radius: 0.62rem;
  box-shadow: 0 1px 3px hsl(0, 0%, 3.1%, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const ServicesIcon = styled.img`
  margin-bottom: 0.62rem;
  height: 10rem;
  width: 10rem;
`;

export const ServicesH1 = styled.h1`
  color: hsl(240, 100%, 98.6%);
  font-size: 2.5rem;
  margin-bottom: 4rem;

  @media screen and (max-width: 30em) {
    font-size: 2rem;
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 0.62rem;
`;

export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
`;
