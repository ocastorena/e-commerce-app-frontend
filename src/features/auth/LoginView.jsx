// src/features/auth/LoginView.jsx
import React from "react";
import styled from "styled-components";

// Outer wrapper to center the login container
const LoginWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #0f0f0f; /* Dark background */
  color: #fff;              /* Light text for contrast */
`;

// Container for the login form
const LoginContainer = styled.div`
  background-color: #1b1b1b;
  padding: 2rem;
  border-radius: 8px;
  width: 400px;
  max-width: 90%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
`;

// Title styling
const Title = styled.h2`
  margin-bottom: 1.5rem;
  text-align: center;
`;

// Styled form
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

// A form group to contain label + input
const FormGroup = styled.div`
  margin-bottom: 1.25rem;

  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
    color: #ccc; /* Slightly lighter label text */
  }

  input {
    width: 100%;
    box-sizing: border-box;
    padding: 0.75rem;
    border: 1px solid #333;
    border-radius: 4px;
    background-color: #2b2b2b;
    color: #fff;
    outline: none;
    transition: border-color 0.2s ease;

    &:focus {
      border-color: #4d8bf5; /* Accent color on focus */
    }
  }
`;

// Submit button
const SubmitButton = styled.button`
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  background-color: #4d8bf5; /* Accent color */
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #3a6dc2; /* Darken on hover */
  }
`;

const RegisterSection = styled.div`
  margin-top: 1.5rem;
  text-align: center;
  font-size: 0.9rem;
`;

const RegisterButton = styled.button`
  margin-top: 0.5rem;
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  background-color: #4d8bf5;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #3a6dc2;
  }
`;

const LoginView = ({
  email,
  password,
  onEmailChange,
  onPasswordChange,
  onSubmit,
  onRegister,
}) => {
  return (
    <LoginWrapper>
      <LoginContainer>
        <Title>Login</Title>
        <Form onSubmit={onSubmit}>
          <FormGroup>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={onEmailChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={onPasswordChange}
              required
            />
          </FormGroup>
          <SubmitButton type="submit">Login</SubmitButton>
        </Form>
        <RegisterSection>
          <p>Don't have an account?</p>
          <RegisterButton type="button" onClick={onRegister}>
            Register
          </RegisterButton>
        </RegisterSection>
      </LoginContainer>
    </LoginWrapper>
  );
};

export default LoginView;