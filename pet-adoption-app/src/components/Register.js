import React from "react";
import { useState } from "react";
import axios from "axios";
import { registerUser, loginUser } from "../api";
import { useNavigate } from 'react-router-dom';
import '../styles/Register.css'

axios.defaults.baseURL = "http://localhost:4000/api";

const Register = () => {
  // States
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const navigate = useNavigate();
  
  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const credentials = {
        name,
        email,
        password
      };

      await registerUser(credentials);
      await loginUser(credentials);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <h1>Register</h1>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          className="form-control"
          type="text"
          id="name"
          placeholder="Enter your name here"
          value={name}
          onChange={(e) => handleChangeName(e)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          className="form-control"
          type="text"
          id="email"
          placeholder="Enter your email here"
          value={email}
          onChange={(e) => handleChangeEmail(e)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          className="form-control"
          type="password"
          id="password"
          placeholder="Enter your password here"
          value={password}
          onChange={(e) => handleChangePassword(e)}
        />
      </div>
      <button className="btn btn-primary">Register</button>
    </form>
  );
};

export default Register;

