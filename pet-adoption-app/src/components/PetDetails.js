import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
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
  }, [id]);

  return (
    <div>
      {pet ? (
        <div className="container">
          <div className="card">
            <h2 className="card-title">{pet.name}</h2>
            <img src={pet.image} alt={pet.name} className="card-img-top" />
            <p className="card-text">Species: {pet.species}</p>
            <p className="card-text">Age: {pet.age}</p>
          </div>
          <div className="adopt-button">
            <Link to="/adopt" className="btn btn-primary">Adopt</Link>
          </div>
        </div>
      ) : (
        <p>Loading pet details...</p>
      )}
      <BackTop/>
    </div>
  );
};

export default PetDetails;



