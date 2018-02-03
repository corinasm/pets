// This is the file that specifies the schema to be loaded by mongoose.
// This file is required by mongoose.js.
// We do not need to require this file in the controller, instead, the model itself is loaded from mongoose.
// There can be many models in the server/models folder.

var mongoose = require('mongoose');

// create the schema
var PetSchema = new mongoose.Schema({
    name: {type: String, required:[true, "Pet name is required"], minlength: [3, "Pet name must contain minimum 3 characters"]},
    type: {type: String, required:[true, "Pet type is required"], minlength: [3, "Pet type must contain minimum 3 characters"]},
    description: {type: String, required:[true, "Pet description is required"], minlength: [3, "Pet description must contain minimum 3 characters"]}, 
    skill1: {type: String, required: false},
    skill2: {type: String, required: false},
    skill3: {type: String, required: false}, 
    like_count: {type: Number, required: false}
    }, {timestamps: true }) 

   mongoose.model('Pet', PetSchema); 
   
// register the schema as a model
var Pet = mongoose.model('Pet', PetSchema);



