const Pet = require('../models/Pet.model');

// add a new Pet
module.exports.createPet = (req, res) =>{
    Pet.create(req.body)
        .then(newPet => {
            res.json({results: newPet})
        })
        .catch(err =>{
            res.json({msg: "Something went wrong", error: err})
        })
}

// find all Pets
module.exports.findAllPets = (req, res) => {
    Pet.find()
        .then(allPets=>{
            res.json({results: allPets})
        })
        .catch(err =>{
            res.json({msg: "Something went wrong", error: err})
        })
}

// find a random Pet
/* module.exports.findRandomPet = (req, res) => {
    // .exec() is just saying execute a function after .count()
    Pet.count().exec( (err, count) => {
        let random = Math.floor(Math.random() * count);
        Pet.findOne().skip(random)
        .then(ranPet => res.json({results: ranPet}))
        .catch(err => res.json({msg: 'Something went wrong', error: err}))
    })
} */

// find one Pet
module.exports.findOnePet = (req, res) => {
    Pet.find({_id: req.params.id})
        .then(onePet => res.json({results: onePet}))
        .catch(err =>{
            res.json({msg: "Something went wrong", error: err})
        })
}

// update a Pet
module.exports.updatePet = (req, res) => {
    Pet.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true, runValidators: true}
    )
        .then(updatedPet => {
            res.json({results: updatedPet})
        })
        .catch(err =>{
            res.json({msg: "Something went wrong", error: err})
        })
}

// delete a Pet
module.exports.deletePet = (req, res) =>{
    Pet.deleteOne({_id: req.params.id})
        .then(deletedPet =>{
            res.json({results: deletedPet})
        })
        .catch(err =>{
            res.json({msg: "Something went wrong", error: err})
        })
}