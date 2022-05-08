const mongoose = require('mongoose');
const { Schema } = mongoose;

// added the owner field 
const photoSchema = new Schema({
    imageName: String,
    imageTitle: String,
    date: String,
    month: String,
    owner: String
   
})

module.exports = mongoose.model('Photo', photoSchema)