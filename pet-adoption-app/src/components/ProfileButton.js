import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"

const ProfileButton = () => {
    const [token, setToken]= useState("")

    useEffect(()=>{
        const localToken = localStorage.getItem("token")
        setToken(localToken)
    },[])
    
  return (
    <>
        {token ? (
            <div className="ml-auto">
            <Link className="btn btn-primary" to="/Profile">Profile</Link>
            </div>
        ):(
            <div className="ml-auto">
            <Link className="btn btn-primary" to="/login">Login</Link>
            </div>
        )
        }
    </>
    
    
  )
}

export default ProfileButton
