import axios from "axios"

//All the functionality of the frontend requests 

//All the requests happen at /api

axios.defaults.baseURL = "http://localhost:4000/api";


//Users 
//Send a post request to /users/register 
 export const registerUser = async(e ,{ name, email, password})=>{

    //prevents page from refreshing
    e.preventDefault()

    //send request
    try{
        const response = await axios.post(axios.defaults.baseURL+"/users/register",{name:name, email:email, password:password})
        console.log(response)
    }catch(error){
        console.log(error)
    }
}

 export const logInUser = async(event ,{ name, email, password, isAdmin })=>{

    //prevents page from refreshing
    event.preventDefault()

    //send request
    try{
        const response = await axios.post(axios.defaults.baseURL+"/users/register",{name, email, password, isAdmin})
        console.log(response)
    }catch(error){
        console.log(error)
    }
}

registerUser()



