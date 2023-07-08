import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { loginUser } from "../api";

axios.defaults.baseURL = "http://localhost:4000/api";

const LogIn = () => {
  const navigate = useNavigate(); // Get the navigate function

  // States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const credentials = {
        email,
        password,
      };

      await loginUser(credentials);
      navigate("/"); // Navigate to the home page
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="container">
      <h1 className="mt-4">Log In</h1>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleChangeEmail}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={handleChangePassword}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Log In
        </button>
      </form>
      <p className="mt-3">
        Don't have an account yet? Click <Link to="/Register">here</Link> to
        register.
      </p>
    </main>
  );
};

export default LogIn;


