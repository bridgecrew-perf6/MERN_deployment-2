const ShelterController = require('../controllers/shelter.controller');

// ***** ROUTES *****
module.exports = app => {
    console.log("here");
    app.get('/api/shelters', ShelterController.findAllShelters);
    app.post('/api/shelters', ShelterController.createShelter);
    // app.get('/api/shelters/random', ShelterController.findRandomShelter);
    app.get('/api/shelters/:id', ShelterController.findOneShelter);
    app.put('/api/shelters/:id', ShelterController.updateShelter);
    app.delete('/api/shelters/:id', ShelterController.deleteShelter);

}