import React from "react";

const Login = ({
  email,
  password,
  onEmailChange,
  onPasswordChange,
  onSubmit,
}) => {
  return (
    <div className="login-page">
      <h2>Login</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label>Email: </label>
          <input type="email" value={email} onChange={onEmailChange} required />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            value={password}
            onChange={onPasswordChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
