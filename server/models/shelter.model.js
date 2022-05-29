const mongoose = require('mongoose');

const ShelterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Shelter name is required!'],
        minlength: [3, 'Shelter name must be at least 3 characters long']
    },
    location: {
        type: String,
        required: [true, 'Shelter location is required!'],
        // enum property says only these strings are valid for this attribute
        // to give enum custom error msg, put in obj w/array of values, and error msg
        enum: {
            values: ['DC', 'Chicago', 'Miami', 'New York'],
            message: 'That is not a valid location'
        }
    }
})

const Shelter = mongoose.model('Shelter', ShelterSchema);

module.exports = Shelter;