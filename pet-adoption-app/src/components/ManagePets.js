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
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e) => {
    setNewPet({ ...newPet, [e.target.name]: e.target.value });
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
    <div className="container">
      <h2>Manage Pets</h2>
      <div>
        <h3>Add New Pet</h3>
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
      <div>
        <h3>Existing Pets</h3>
        <ul>
          {pets.map((pet) => (
            <li key={pet._id} className="mb-3">
              <Link to={`/admin/pets/${pet._id}`}>{pet.name}</Link>
              <button className="btn btn-danger ms-2" onClick={() => handleDeletePet(pet._id)}>Delete</button>
              <button className="btn btn-warning" onClick={() => handleUpdatePet(pet._id, { name: 'Updated Name' })}>Update</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ManagePets;


