const Shelter = require('../models/shelter.model');

// add a new Shelter
module.exports.createShelter = (req, res) =>{
    Shelter.create(req.body)
        .then(newShelter => {
            res.json({results: newShelter})
        })
        .catch(err =>{
            res.json({msg: "Something went wrong", error: err})
        })
}

// find all Shelters
module.exports.findAllShelters = (req, res) => {
    Shelter.find()
        .then(allShelters=>{
            res.json({results: allShelters})
        })
        .catch(err =>{
            res.json({msg: "Something went wrong", error: err})
        })
}

// find a random Shelter
/* module.exports.findRandomShelter = (req, res) => {
    // .exec() is just saying execute a function after .count()
    Shelter.count().exec( (err, count) => {
        let random = Math.floor(Math.random() * count);
        Shelter.findOne().skip(random)
        .then(ranShelter => res.json({results: ranShelter}))
        .catch(err => res.json({msg: 'Something went wrong', error: err}))
    })
} */

// find one Shelter
module.exports.findOneShelter = (req, res) => {
    Shelter.find({_id: req.params.id})
        .then(oneShelter => res.json({results: oneShelter}))
        .catch(err =>{
            res.json({msg: "Something went wrong", error: err})
        })
}

// update a Shelter
module.exports.updateShelter = (req, res) => {
    Shelter.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true, runValidators: true}
    )
        .then(updatedShelter => {
            res.json({results: updatedShelter})
        })
        .catch(err =>{
            res.json({msg: "Something went wrong", error: err})
        })
}

// delete a Shelter
module.exports.deleteShelter = (req, res) =>{
    Shelter.deleteOne({_id: req.params.id})
        .then(deletedShelter =>{
            res.json({results: deletedShelter})
        })
        .catch(err =>{
            res.json({msg: "Something went wrong", error: err})
        })
}