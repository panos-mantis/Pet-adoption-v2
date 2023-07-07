import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPetById } from '../api';

const PetDetails = () => {
  const [pet, setPet] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchPet();
  }, []);

  const fetchPet = async () => {
    try {
      const response = await getPetById(id);
      setPet(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {pet ? (
        <div>
          <h2>{pet.name}</h2>
          <img src={pet.image} alt={pet.name} />
          <p>{pet.description}</p>
        </div>
      ) : (
        <p>Loading pet details...</p>
      )}
    </div>
  );
};

export default PetDetails;
