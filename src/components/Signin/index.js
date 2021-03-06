import React from "react";
import {
  Container,
  FormWrap,
  Icon,
  Money,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text
} from "./SigninElements";

const SignIn = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">
            Bankroll <Money />
          </Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Sign In To Your Account</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormButton type="submit">Continue</FormButton>
              <Text>Forgot Password</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
