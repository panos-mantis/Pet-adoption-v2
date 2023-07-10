import React, { useEffect, useState } from 'react';
import { getAllPets } from '../api';
import { Link } from 'react-router-dom';
import BackTop from './BackTop';


const Pets = () => {
  const [pets, setPets] = useState([]);
  const myImageStyle = {  height: '300px', objectFit:"cover" };

  useEffect(() => {
    fetchPets();
  }, []);

  const fetchPets = async () => {
    try {
      const response = await getAllPets();
      const { pets } = response; 
      setPets(pets);
    } catch (error) {
      console.log(error);
    }
  };

  const getUniqueSpecies = () => {
    const speciesSet = new Set(pets.map((pet) => pet.species));
    return Array.from(speciesSet);
  };

  const renderPetCards = (species) => {
  const filteredPets = pets.filter((pet) => pet.species === species);
  return filteredPets.slice(0, 4).map((pet) => (
    <div className="card" key={pet._id}>
      <img src={pet.image} className="card-img-top" alt={pet.name} style={myImageStyle}/>
      <div className="card-body">
        <h5 className="card-title">{pet.name}</h5>
        <p className="card-text">{pet.description}</p>
        <Link to={`/PetDetails/${pet._id}`} className="btn btn-primary">
          View Details
        </Link>
      </div>
    </div>
  ));
};


  return (
    <div>
      {getUniqueSpecies().map((species) => (
        <section key={species}>
          <h2 className='text-center fs-1'>{species}</h2>
          <div className="card-deck">{renderPetCards(species)}</div>
        </section>
      ))}
      <BackTop/>
    </div>
  );
};

export default Pets;

