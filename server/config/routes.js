// This is the file that specifies which routes will be handled and by which controller methods.
// From routes.js we require the controller file (or files).

var mongoose = require('mongoose');
var Pet = mongoose.model('Pet');
var pets = require('../controllers/pets.js');
var path = require('path');

module.exports = function(app) {
    
    //List all pets
    app.get('/pets', function(req, res) { 
        pets.getAll(req,res)      
    })

    //Get one pet by ID
    app.get('/pet/:id', function(req, res) { 
        pets.getOne(req,res)      
    })

    //Edit a pet
    app.patch('/edit-pet/:id',function(req, res){
        pets.editOne(req,res)
    })

    //Delete (adopt) a pet
    app.delete('/delete-pet/:id',function(req, res){
        pets.deleteOne(req,res)
    })
    
    //Add a new pet
    app.post('/new-pet', function(req, res) {
        console.log("got to the route");
        pets.addOne(req, res)
    })

    // //Write a new review
    // app.post('/write-review/:id', function(req, res) {
    //     console.log("got to the route");
    //     pets.addRevbyRestId(req, res)
    // })

    // app.all("*", (req,res,next) => {
    //     res.sendFile(path.resolve("./../client/dist/index.html"))
    // });

}
