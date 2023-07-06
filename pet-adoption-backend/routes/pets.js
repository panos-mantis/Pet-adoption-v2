const express = require('express');
const router = express.Router();
const petController = require('../controllers/petController');
const { authenticateToken, authorizeAdmin,  } = require('../middlewares/authMiddleware');

// Create a new pet
router.post('/pets', authenticateToken, authorizeAdmin, petController.createPet);

// Get all pets
router.get('/pets', petController.getAllPets);

// Get a pet by ID
router.get('/pets/:id', petController.getPetById);

// Update a pet by ID
router.put('/pets/:id', authenticateToken, authorizeAdmin, petController.updatePetById);

// Delete a pet by ID
router.delete('/pets/:id', authenticateToken, authorizeAdmin, petController.deletePetById);

// Get pets by species
router.get('/pets/species/:species', petController.getPetsBySpecies);


module.exports = router;



