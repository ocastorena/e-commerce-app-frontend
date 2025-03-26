import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../store/slices/auth";
import Login from "../components/Login";

const LoginContainer = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Dispatch the login thunk with the entered credentials
    const resultAction = await dispatch(login({ email, password }));
    // Optionally check if the action was fulfilled or rejected
    if (login.fulfilled.match(resultAction)) {
      // Login succeeded; perform additional actions, like navigation
      console.log("Login successful");
    } else {
      // Login failed; handle the error (e.g., display an error message)
      console.error("Login failed");
    }
  };

  return (
    <Login
      email={email}
      password={password}
      onEmailChange={handleEmailChange}
      onPasswordChange={handlePasswordChange}
      onSubmit={handleSubmit}
    />
  );
};

export default LoginContainer;
