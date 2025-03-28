// src/features/user/RegisterView.jsx
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 400px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #1b1b1b;
  border: 1px solid #2b2b2b;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 1rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #2b2b2b;
  border-radius: 4px;
  background-color: #2b2b2b;
  color: #fff;
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

const ErrorMessage = styled.div`
  color: red;
  text-align: center;
`;

const RegisterView = ({
  formData,
  onChange,
  onSubmit,
  onLogin,
  loading,
  error,
}) => {
  return (
    <Container>
      <Title>Welcome</Title>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Form onSubmit={onSubmit}>
        <Input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={onChange}
        />
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={onChange}
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={onChange}
        />
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={onChange}
        />
        <Input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={onChange}
        />
        <SubmitButton type="submit" disabled={loading}>
          {loading ? "Registering..." : "Register"}
        </SubmitButton>
      </Form>
      <RegisterSection>
        <p>Already have an account?</p>
        <RegisterButton type="button" onClick={onLogin}>
          Log in
        </RegisterButton>
      </RegisterSection>
    </Container>
  );
};

export default RegisterView;
