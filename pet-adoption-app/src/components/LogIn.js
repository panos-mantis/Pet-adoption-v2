import React from "react";
import { useState } from "react";
import {Link} from "react-router-dom"
import axios from "axios";
import { loginUser } from "../api";

axios.defaults.baseURL = "http://localhost:4000/api";

const LogIn = () => {
  //States
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    console.log(email);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
    console.log(password);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {

      const credentials = {
        email,
        password
      };

    await loginUser(credentials);
    }catch(error){
        console.log(error)
    }
  }
  
  return (
    <main>
        <h1>Log In</h1>
    <form onSubmit={handleLogin}>
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
      <button className=''>Log in</button>
    </form>
    <p>Don't have an account yet? click <Link to="/Register" >Register</Link></p>
    </main>
    
  );
};

export default LogIn;
