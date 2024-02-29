import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ user, setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("username", username);
    setUser(username);
    setUsername("");
    setPassword("");
    navigate(-1);
  };

  return (
    <div className="loginWrapper">
      <form onSubmit={handleSubmit} className="formWrapper">
        <div className="usernameWrapper">
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            id="username"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="passwordWrapper">
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="submitBtn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
