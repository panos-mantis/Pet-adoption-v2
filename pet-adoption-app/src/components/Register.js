import React from "react";
import { useState } from "react";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:4000/api";

const Register = () => {
  //States
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeName = (e) => {
    setName(e.target.value);
    console.log(name);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    console.log(email);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
    console.log(password);
  };
  const registerUser = async (e, { name, email, password }) => {
    //prevents page from refreshing
    e.preventDefault();

    //send request
    try {
      const response = await axios.post("/users/register", {
        name: name,
        email: email,
        password: password,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={(e) => registerUser(e, { name, email, password })}>
      <h1>Register</h1>
      <div>
        <label className="">name</label>
        <input
          className=""
          type="text"
          placeholder="Enter your name here"
          value={name}
          onChange={(e) => handleChangeName(e)}
        ></input>
      </div>
      <div>
        <label className="">email</label>
        <input
          className=""
          type="text"
          placeholder="Enter your email here"
          value={email}
          /* required */ onChange={(e) => handleChangeEmail(e)}
        ></input>
      </div>
      <div>
        <label className="">password</label>
        <input
          className=""
          type="password"
          placeholder="Enter your password here"
          value={password}
          /* required */ onChange={(e) => handleChangePassword(e)}
        ></input>
      </div>
      <button className=''>Register</button>
    </form>
  );
};

export default Register;
