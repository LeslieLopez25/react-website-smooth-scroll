import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: hsl(276.5, 100%, 9%);
  position: relative;
  padding: 0 1.87rem;
  height: 50rem;
  z-index: 1;

  :before {
    content: "";
    background: linear-gradient(
        180deg,
        hsl(276.5, 100%, 9%, 0.2) 0%,
        hsl(276.5, 100%, 9%, 0.4) 100%
      ),
      linear-gradient(180deg, hsl(276.5, 100%, 9%, 0.2) 0%, transparent 100%);
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 2;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  background: hsl(0, 0%, 75.3%);
  -o-object-fit: cover;
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  padding: 0.5rem 1.5rem;
  max-width: 75rem;
  z-index: 3;
`;

export const HeroH1 = styled.h1`
  color: hsl(240, 100%, 98.6%);
  font-size: 3rem;
  text-align: center;

  @media screen and (max-width: 48rem) {
    font-size: 2.5rem;
  }

  @media screen and (max-width: 30rem) {
    font-size: 2rem;
  }
`;

export const HeroP = styled.p`
  color: hsl(240, 100%, 98.6%);
  font-size: 1.5rem;
  text-align: center;
  margin-top: 1.5rem;
  max-width: 37.5rem;

  @media screen and (max-width: 48em) {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 30em) {
    font-size: 1.12rem;
  }
`;

export const HeroBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;

export const ArrowForward = styled(MdArrowForward)`
  font-size: 1.25rem;
  margin-left: 0.5rem;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  font-size: 1.25rem;
  margin-left: 0.5rem;
`;
