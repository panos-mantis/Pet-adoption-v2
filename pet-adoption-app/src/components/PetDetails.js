import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPetById } from '../api';
import BackTop from './BackTop';

const PetDetails = () => {
  const [pet, setPet] = useState(null);
  const { id } = useParams();

  useEffect(() => {
  const fetchPet = async () => {
    try {
      const response = await getPetById(id);
      setPet(response.pet);
    } catch (error) {
      console.log(error);
    }
  };

  fetchPet();
}, [id]); // Adding the id to the dependency array


  return (
    <div>
      {pet ? (
        <div>
          <h2>{pet.name}</h2>
          <img src={pet.image} alt={pet.name} />
          <p>Species: {pet.species}</p>
          <p>Age: {pet.age}</p>
        </div>
      ) : (
        <p>Loading pet details...</p>
      )}
      <BackTop/>
    </div>
  );
};

export default PetDetails;
