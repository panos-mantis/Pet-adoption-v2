import React, { useEffect, useState } from "react";
import { getCurrentUser } from "../api";
import { FaDog } from 'react-icons/fa'

const Profile = () => {
  const [userObj, setUserObj] = useState({});

  useEffect(() => {
    
    try{
        const getUserData = async () => {
        const userData = await getCurrentUser();
        setUserObj(userData);
      };
      getUserData();
    }catch(error){
      setUserObj({})
    }
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="card ">
      {userObj.email ? (<><div className="card-header fw-bolder">
          <span>name: {userObj.name}</span> 
        </div>
        <div className="card-body">
        <p className="card-text"><span>email: {userObj.email} </span></p>
        <FaDog className="mx-auto"/>
    </div></>)
    :( <><div className="card-header fw-bolder">
          <span>Please log in</span> 
        </div>
        <div className="card-body">
        <p className="card-text">In order to see your profile please LogIn</p>
        <FaDog className="mx-auto"/>
    </div></>)}
        
  </div>
  );
};

export default Profile;
