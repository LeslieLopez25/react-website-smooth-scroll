import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaHandHoldingUsd } from "react-icons/fa";

export const Container = styled.div`
  background: linear-gradient(
    108deg,
    hsl(276.5, 100%, 9%, 1) 0%,
    hsl(270, 50%, 60%, 1) 100%
  );
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  min-height: 43.25rem;
  overflow: hidden;
  z-index: 0;
`;

export const FormWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;

  @media screen and (max-width: 25em) {
    height: 80%;
  }
`;

export const Icon = styled(Link)`
  color: hsl(240, 100%, 98.6%);
  font-size: 2rem;
  font-weight: 700;
  text-decoration: none;
  margin-top: 2rem;
  margin-left: 2rem;

  @media screen and (max-width: 30em) {
    margin-left: 1rem;
    margin-top: 0.5rem;
  }
`;

export const Money = styled(FaHandHoldingUsd)`
  color: hsl(210.1, 100%, 50%);
  position: relative;
  left: 0.312rem;
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;

  @media screen and (max-width: 30em) {
    padding: 0.62em;
  }
`;

export const Form = styled.form`
  display: grid;
  background: hsl(0, 0%, 3.1%);
  margin: 0 auto;
  padding: 5rem 2rem;
  max-width: 25rem;
  width: 100%;
  height: auto;
  border-radius: 0.25rem;
  box-shadow: 0 1px 3px hsl(0, 0%, 3.1%, 0.9);
  z-index: 1;

  @media screen and (max-width: 25em) {
    padding: 2rem 2rem;
  }
`;

export const FormH1 = styled.h1`
  color: hsl(240, 100%, 98.6%);
  font-size: 1.25rem;
  font-weight: 400;
  text-align: center;
  margin-bottom: 2.5rem;
`;

export const FormLabel = styled.label`
  color: hsl(240, 100%, 98.6%);
  font-size: 0.87rem;
  margin-bottom: 0.5rem;
`;

export const FormInput = styled.input`
  margin-bottom: 2rem;
  padding: 1rem 1rem;
  border: none;
  border-radius: 0.25rem;
`;

export const FormButton = styled.button`
  background: hsl(240, 100%, 40.2%);
  color: hsl(240, 100%, 98.6%);
  font-size: 1.25rem;
  padding: 1rem 0;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;

  &:hover {
    background: hsl(270, 50%, 60%);
    color: hsl(0, 0%, 3.1%);
  }
`;

export const Text = styled.span`
  color: hsl(240, 100%, 98.6%);
  font-size: 0.87rem;
  text-align: center;
  margin-top: 1.5rem;
  cursor: pointer;
`;
