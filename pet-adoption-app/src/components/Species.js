import React from 'react'
import {getAllPets, getPetsBySpecies} from"../api"
import { useEffect, useState } from 'react';

const Species = () => {
  const [pets, setPets] = useState([]);
  const [species, setSpecies] = useState("")
  

  useEffect(() => {
    fetchPets()
  }, []);

  const fetchPets = async () => {
    try {
      const response = await getAllPets();
      console.log(response)
      const { pets } = response; 
      setPets(pets);
      console.log(pets)
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
        <input type='text' value={species} placeholder='Filter here' onChange={(e)=>setSpecies(e.target.value)}>
        </input>

    </>
  )
}

export default Species