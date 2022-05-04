const mongoose = require('mongoose');
const { Schema } = mongoose;

const photoSchema = new Schema({
    imageName: String,
    imageTitle: String,
    date: String,
    month: String
   
})

module.exports = mongoose.model('Photo', photoSchema)