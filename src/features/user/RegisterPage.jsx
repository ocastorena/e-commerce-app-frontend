import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register, selectIsLoading, selectError } from "./UserSlice";
import RegisterView from "./RegisterView";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisterContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
  });
  const [validationError, setValidationError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const { email, password, confirmPassword, username } = formData;
    if (!username) return "Username is required";
    if (!email) return "Email is required";
    // Basic email regex check
    if (!/\S+@\S+\.\S+/.test(email)) return "Email is invalid";
    if (!password) return "Password is required";
    if (password.length < 6) return "Password must be at least 6 characters";
    if (password !== confirmPassword)
      return "Password and confirm password do not match";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errorMsg = validateForm();
    if (errorMsg) {
      setValidationError(errorMsg);
      return;
    }
    setValidationError(null);
    const resultAction = await dispatch(register(formData));
    if (register.fulfilled.match(resultAction)) {
      toast.success("Registration successful!", {
        onClose: () => {
          navigate("/");
        },
      });
    } else {
      toast.error("Registration failed. Please try again.");
      console.error("Registration failed");
    }
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <>
      <ToastContainer />
      <RegisterView
        formData={formData}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onLogin={handleLogin}
        loading={loading}
        error={error || validationError}
      />
    </>
  );
};

export default RegisterContainer;
