import React, { useEffect, useState } from 'react';
import { getAllPets } from '../api';

const Pets = () => {
  const [pets, setPets] = useState([]);

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

  const renderPetCards = (species) => {
    const filteredPets = pets.filter((pet) => pet.species === species);
    return filteredPets.slice(0, 4).map((pet) => (
      <div className="card" key={pet._id}>
        <img src={pet.image} className="card-img-top" alt={pet.name} />
        <div className="card-body">
          <h5 className="card-title">{pet.name}</h5>
          <p className="card-text">{pet.description}</p>
        </div>
      </div>
    ));
  };

  return (
    <div>
      <section>
        <h2>Dogs</h2>
        <div className="card-deck">{renderPetCards('dog')}</div>
      </section>
      <section>
        <h2>Cats</h2>
        <div className="card-deck">{renderPetCards('cat')}</div>
      </section>
      <section>
        <h2>Rabbits</h2>
        <div className="card-deck">{renderPetCards('rabbit')}</div>
      </section>
      <section>
        <h2>Others</h2>
        <div className="card-deck">{renderPetCards('other')}</div>
      </section>
    </div>
  );
};

export default Pets;
