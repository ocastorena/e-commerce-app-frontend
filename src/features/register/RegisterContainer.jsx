// src/features/register/RegisterContainer.jsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import RegisterView from "./RegisterView";
import { register } from "../register/RegisterSlice";

const RegisterContainer = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleAddressChange = (e) => setAddress(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Dispatch the register action with the provided data.
    // The register thunk should handle the API call and return a fulfilled action on success.
    const resultAction = await dispatch(
      register({ username, email, password, address })
    );
    if (register.fulfilled && register.fulfilled.match(resultAction)) {
      console.log("Registration successful");
      navigate("/login"); // Redirect to login page or another route after successful registration.
    } else {
      console.error("Registration failed");
      // Optionally, add error handling (e.g., setting error state or showing a message).
    }
  };

  return (
    <RegisterView
      username={username}
      email={email}
      password={password}
      address={address}
      onUsernameChange={handleUsernameChange}
      onEmailChange={handleEmailChange}
      onPasswordChange={handlePasswordChange}
      onAddressChange={handleAddressChange}
      onSubmit={handleSubmit}
    />
  );
};

export default RegisterContainer;
