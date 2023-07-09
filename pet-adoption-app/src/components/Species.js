import React from "react";
import { getPetsBySpecies , getAllPets} from "../api";
import { useEffect, useState } from "react";
import { useParams , useNavigate ,Link} from "react-router-dom";
import BackToTop from "./BackTop";


const Species = () => {
  const [pets, setPets] = useState([]);
  const [btnPets, setBtnPets] = useState([])
  const { species } = useParams();
  const navigate = useNavigate()
  const myImageStyle = {  height: '300px', objectFit:"cover" };
  
  
  useEffect(() => {
    
    fetchAllPets();
    fetchPets();
  }, [species]);

const fetchAllPets = async () => {
    try {
      const response = await getAllPets();
      console.log(response.pets)
      setBtnPets( response.pets) 
      
    } catch (error) {
      console.log(error);
    }
  };

  const getUniqueSpecies = () => {
    const speciesSet = new Set(btnPets.map((pet) => pet.species));
    return Array.from(speciesSet);
  };

  const fetchPets = async () => {
    try {
      const response = await getPetsBySpecies(species);
      const { pets } = response;
      setPets(pets);
      console.log(response.pets.length);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container text-center">
        <div >
        {getUniqueSpecies().map((uniqueSpecies) => (
        <button key={uniqueSpecies} className="mx-3 btn btn-primary" onClick={()=>navigate(`/Species/${uniqueSpecies}`)}>Get all the {uniqueSpecies}</button>
      ))}
        </div>
      
      <ul className="card-deck">
        {pets.map((pet) => (
            <div className="card" key={pet._id}>
              <h2>{pet.name}</h2>
              <img src={pet.image} className="card-img-top" alt={pet.name} style={myImageStyle}/>
              <div className="card-body">
                <p className="card-title">Species: {pet.species}</p>
                <p className="card-text">Age: {pet.age}</p>
                <Link to={`/PetDetails/${pet._id}`} className="btn btn-primary">
                View Details
                </Link>
              </div>
              
            </div>
        ))}
      </ul>
      <BackToTop/>
    </div>
  );
};

export default Species;
