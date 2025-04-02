import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  login,
  loginWithGoogle,
  loginWithFacebook,
  loginWithGithub,
} from "./AuthSlice";
import LoginView from "./LoginView";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resultAction = await dispatch(login({ email, password }));
    if (login.fulfilled.match(resultAction)) {
      console.log("Login good");
      toast.success("Login successful!", {
        onClose: () => {
          navigate("/");
        },
      });
    } else {
      toast.error("Login failed. Please try again.");
      console.error("Login failed");
    }
  };

  const handleLoginWithGoogle = async () => {
    try {
      const resultAction = await dispatch(loginWithGoogle());
      if (loginWithGoogle.fulfilled.match(resultAction)) {
        console.log("Third-party login with Google successful");
        navigate("/");
      } else {
        console.error("Third-party login with Google failed");
      }
    } catch (error) {
      console.error("Error during third-party login with Google:", error);
    }
  };

  const handleLoginWithFacebook = async () => {
    try {
      const resultAction = await dispatch(loginWithFacebook());
      if (loginWithFacebook.fulfilled.match(resultAction)) {
        console.log("Third-party login with Facebook successful");
        navigate("/");
      } else {
        console.error("Third-party login with Facebook failed");
      }
    } catch (error) {
      console.error("Error during third-party login with Facebook:", error);
    }
  };

  const handleLoginWithGithub = async () => {
    try {
      const resultAction = await dispatch(loginWithGithub());
      if (loginWithGithub.fulfilled.match(resultAction)) {
        console.log("Third-party login with GitHub successful");
        navigate("/");
      } else {
        console.error("Third-party login with GitHub failed");
      }
    } catch (error) {
      console.error("Error during third-party login with GitHub:", error);
    }
  };

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <>
      <ToastContainer />
      <LoginView
        email={email}
        password={password}
        onEmailChange={handleEmailChange}
        onPasswordChange={handlePasswordChange}
        onSubmit={handleSubmit}
        onRegister={handleRegister}
        onLoginWithGoogle={handleLoginWithGoogle}
        onLoginWithFacebook={handleLoginWithFacebook}
        onLoginWithGithub={handleLoginWithGithub}
      />
    </>
  );
};

export default LoginPage;
