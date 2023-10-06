import axios from "axios"

//All the functionality of the frontend requests 

//All the requests happen at /api

axios.defaults.baseURL = "https://pet-adoption-backend-ozox.onrender.com/api";
/* axios.defaults.baseURL = "http://localhost:4000/api"; */


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
        const response = await axios.post("/users/login", userData);
        const { token } = response.data;
        localStorage.setItem("token", token); // Save the token in local storage
        console.log(response)
    }catch(error){
        console.log(error)
        throw error.response.data;
    }
}

// Create a new pet (just for admins)
export const createPet = async (petData, token) => {
  try {
    const response = await axios.post("/pets", petData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response);
  } catch (error) {
    console.log(error);
    throw error.response.data;
  }
};

// Get all pets
export const getAllPets = async () => {
  try {
    const response = await axios.get("/pets");
    return response.data;
  } catch (error) {
    console.log(error);
    throw error.response.data;
  }
};

// Get a pet by ID
export const getPetById = async (id) => {
  try {
    const response = await axios.get(`/pets/${id}`);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error.response.data;
  }
};


// Update a pet by ID (just for admins)
export const updatePetById = async (id, petData, token) => {
  try {
    const response = await axios.put(`/pets/${id}`, petData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response);
  } catch (error) {
    console.log(error);
    throw error.response.data;
  }
};

// Delete a pet by ID (just for admins)
export const deletePetById = async (id, token) => {
  try {
    const response = await axios.delete(`/pets/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response);
  } catch (error) {
    console.log(error);
    throw error.response.data;
  }
};

// Get pets by species
export const getPetsBySpecies = async (species) => {
  try {
    const response = await axios.get(`/pets/species/${species}`);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error.response.data;
  }
};



// Get the current user
export const getCurrentUser = async () => {
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('No token found');
    }
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.get('/users', config);
    
    return response.data.user;
    
  } catch (error) {
    console.log(error);
    throw error
  }
};


// Function for logging out the user
export const logout = () => {
  localStorage.removeItem('token'); // Remove the token from localStorage
};


