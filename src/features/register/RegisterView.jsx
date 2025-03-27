import React from "react";
import styled from "styled-components";

const RegisterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #0f0f0f; /* Dark background */
  color: #fff;
`;

const RegisterContainer = styled.div`
  background-color: #1b1b1b;
  padding: 2rem;
  border-radius: 8px;
  width: 400px;
  max-width: 90%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
`;

const Title = styled.h2`
  margin-bottom: 1.5rem;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 1.25rem;

  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
    color: #ccc; /* Lighter label text */
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

const RegisterView = ({
  username,
  email,
  password,
  address,
  onUsernameChange,
  onEmailChange,
  onPasswordChange,
  onAddressChange,
  onSubmit,
}) => {
  return (
    <RegisterWrapper>
      <RegisterContainer>
        <Title>Register</Title>
        <Form onSubmit={onSubmit}>
          <FormGroup>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={onUsernameChange}
              required
            />
          </FormGroup>
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
          <FormGroup>
            <label htmlFor="address">Address (optional)</label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={onAddressChange}
            />
          </FormGroup>
          <SubmitButton type="submit">Register</SubmitButton>
        </Form>
      </RegisterContainer>
    </RegisterWrapper>
  );
};

export default RegisterView;
