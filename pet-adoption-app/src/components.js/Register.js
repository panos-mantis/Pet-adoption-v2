import React from 'react'
import RegisterLoginHeader from './RegisterLoginHeader'
import NameInput from './NameInput'
import EmailInput from './EmailInput'
import PasswordInput from './PasswordInput'
import SubmitButton from './SubmitButton'
import { useState } from 'react'
import axios from 'axios'
axios.defaults.baseURL = "http://localhost:4000/api";

const Register = () => {
    //States 
    const [name, setName]=useState("")
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")
    
    
    const handleChangeName = (e)=>{
        setName(e.target.value)
        console.log(name)
    }
    const handleChangeEmail = (e)=>{
        setEmail(e.target.value)
        console.log(email)
    }
    const handleChangePassword = (e)=>{
        setPassword(e.target.value)
        console.log(password)
    }
    const registerUser = async(e ,{ name, email, password})=>{

        //prevents page from refreshing
        e.preventDefault()
    
        //send request
        try{
            const response = await axios.post("/users/register",{name:name, email:email, password:password})
            console.log(response)
        }catch(error){
            console.log(error)
        }
    }
  return (
    
    <form onSubmit={(e)=>registerUser(e,{ name, email, password})}>
        <RegisterLoginHeader text="Register"/>
        <NameInput value={name} handleChange={handleChangeName}/>
        <EmailInput value={email} handleChange={handleChangeEmail}/>
        <PasswordInput value={password} handleChange={handleChangePassword}/>
        <SubmitButton text="Register"/>
    </form>
    
  )
}

export default Register