const PetController = require('../controllers/Pet.controller');

// ***** ROUTES *****
module.exports = app => {
    console.log("here");
    app.get('/api/pets', PetController.findAllPets);
    app.post('/api/pets', PetController.createPet);
    // app.get('/api/Pets/random', PetController.findRandomPet);
    app.get('/api/pets/:id', PetController.findOnePet);
    app.put('/api/pets/:id', PetController.updatePet);
    app.delete('/api/pets/:id', PetController.deletePet);

}
