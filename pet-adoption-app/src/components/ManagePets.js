import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllPets, createPet, deletePetById, updatePetById } from '../api';

const ManagePets = () => {
  const [pets, setPets] = useState([]);
  const [newPet, setNewPet] = useState({
    name: '',
    species: '',
    age: 0,
    image: '',
  });

  useEffect(() => {
    fetchPets();
  }, []);

  const fetchPets = async () => {
    try {
      const response = await getAllPets();
      setPets(response.pets);
      console.log(response.pets)
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e) => {
    setNewPet({ ...newPet, [e.target.name]: e.target.value });
    console.log(newPet)
    console.log(e.target.value)
  };

  const handleAddPet = async () => {
    try {
      const token = localStorage.getItem('token');
      await createPet(newPet, token);
      setNewPet({
        name: '',
        species: '',
        age: 0,
        image: '',
      });
      fetchPets();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeletePet = async (id) => {
    try {
      const token = localStorage.getItem('token');
      await deletePetById(id, token);
      fetchPets();
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdatePet = async (id, updatedPet) => {
    try {
      const token = localStorage.getItem('token');
      await updatePetById(id, updatedPet, token);
      fetchPets();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container-lg ">
      <div className='row column-gap-5'>
      <div className='col-4 '>
      <h2 className='text-center'>Manage Pets</h2>
      <div>
        <h3 className='text-center'>Add New Pet</h3>
        <div className="mb-3">
          <label className="form-label">Name:</label>
          <input type="text" className="form-control" name="name" value={newPet.name} onChange={handleInputChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Species:</label>
          <input type="text" className="form-control" name="species" value={newPet.species} onChange={handleInputChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Age:</label>
          <input type="number" className="form-control" name="age" value={newPet.age} onChange={handleInputChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Image URL:</label>
          <input type="text" className="form-control" name="image" value={newPet.image} onChange={handleInputChange} />
        </div>
        <button className="btn btn-primary" onClick={handleAddPet}>Add Pet</button>
      </div>
      
      </div>



      <div className='col-6 ms-5'>
        <h3>Existing Pets</h3>
        <ul className="list-group list-group-flush">
          {pets.map((pet) => (
            <li key={pet._id} className="mb-3 list-group-item">
              <Link className='text-decoration-none focus-ring' to={`/PetDetails/${pet._id}`}>{pet.name}</Link>
              <button className="btn btn-danger ms-2  " onClick={() => handleDeletePet(pet._id)}>Delete</button>
              <button className="btn btn-warning ms-2   " onClick={() => handleUpdatePet(pet._id, newPet )}>Update</button>
              <br></br>
              <p className='fs-6'>{pet.species}</p>
            </li>
          ))}
        </ul>
      </div>
      </div>      

    </div>
  );
};

export default ManagePets;


