import axios from "axios"

//All the functionality of the frontend requests 

//All the requests happen at /api

axios.defaults.baseURL = "http://localhost:4000/api";


//Users 
//Send a post request to /users/register 
 export const registerUser = async(userData)=>{
    //send request
    try{
        const response = await axios.post("/users/register",userData)
        console.log(response)
    }catch(error){
        console.log(error)
        throw error.response.data;
    }
}

 export const loginUser = async(userData)=>{
    //send request
    try{
        const response = await axios.post("/users/login", userData)
        console.log(response)
    }catch(error){
        console.log(error)
        throw error.response.data;
    }
}







