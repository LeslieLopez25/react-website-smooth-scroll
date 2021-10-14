import styled from "styled-components";

export const InfoContainer = styled.div`
  background: ${({ lightBg }) =>
    lightBg ? "hsl(240,100%,98.6%)" : "hsl(276.5,100%,9%)"};
  color: hsl(240, 100%, 98.6%);

  @media screen and (max-width: 48em) {
    padding: 6.25rem 0;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  justify-content: center;
  margin-right: auto;
  margin-left: auto;
  padding: 0 1.5rem;
  max-width: 68.75rem;
  width: 100%;
  height: 53.75rem;
  z-index: 1;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};
  align-items: center;

  @media screen and (max-width: 48em) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  grid-area: col1;
  margin-bottom: 0.93rem;
  padding: 0 0.93rem;
`;

export const Column2 = styled.div`
  grid-area: col2;
  margin-bottom: 0.93rem;
  padding: 0 0.93rem;
`;

export const TextWrapper = styled.div`
  padding-top: 0;
  padding-bottom: 3.75rem;
  max-width: 33.75rem;
`;

export const TopLine = styled.p`
  color: hsl(210.1, 100%, 50%);
  font-size: 1rem;
  font-weight: 700;
  line-height: 1rem;
  letter-spacing: 0.0875rem;
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

export const Heading = styled.h1`
  color: ${({ lightText }) =>
    lightText ? "hsl(240,100%,98.6%)" : "hsl(0,0%,3.1%)"};
  font-size: 3rem;
  font-weight: 600;
  line-height: 1.1;
  margin-bottom: 1.5rem;

  @media screen and (max-width: 30em) {
    font-size: 2rem;
  }
`;

export const Subtitle = styled.p`
  color: ${({ darkText }) =>
    darkText ? "hsl(0,0%,3.1%)" : "hsl(240,100%,98.6%)"};
  font-size: 1.12rem;
  line-height: 1.5rem;
  margin-bottom: 2.18rem;
  max-width: 27.5rem;
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: 34.68rem;
  height: 100%;
`;

export const Img = styled.img`
  margin: 0 0 0.62rem 0;
  padding-right: 0;
  width: 100%;
`;
