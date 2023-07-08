import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { getAllPets } from '../api';
import ProfileButton from './ProfileButton';

const Navbar = () => {
  const [pets,setPets] = useState([])
  
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

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link  className="nav-link" to="/">Home <span className="sr-only"></span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/pets">Pets</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Adopt">Adopt</Link>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Species
            </Link>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            {getUniqueSpecies().map((uniqueSpecies) => (
            <li key={uniqueSpecies+"dropdown"}><Link  className="dropdown-item" to={`Species/${uniqueSpecies}`}>{uniqueSpecies}</Link></li>
            ))}
            </ul>
          </li>
        </ul>
      </div>
      <ProfileButton/>
    </nav>
  );
};

export default Navbar;
