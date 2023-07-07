import React from "react";
import { getPetsBySpecies } from "../api";
import { useEffect, useState } from "react";
import { useParams , useNavigate } from "react-router-dom";


const Species = () => {
  const [pets, setPets] = useState([]);
  const { species } = useParams();
  const navigate = useNavigate()
  
  
  useEffect(() => {
    fetchPets();
  }, [species]);

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
    <>
      <button className="mx-auto" onClick={()=>navigate("/Species/dog")}>Get all the dogs</button>
      <button className="mx-auto"onClick={()=>navigate("/Species/cat")}>Get all the cats</button>
      <button className="mx-auto"onClick={()=>navigate("/Species/kitten")}>Get all the kittens</button>
      <ul className="container text-center">
        {pets.map((pet) => (
            <div className="card" key={pet._id}>
              <h2>{pet.name}</h2>
              <img src={pet.image} className="card-img-top" alt={pet.name}/>
              <div className="card-body">
                <p className="card-title">Species: {pet.species}</p>
                <p className="card-text">Age: {pet.age}</p>
              </div>
              
            </div>
        ))}
      </ul>
    </>
  );
};

export default Species;
