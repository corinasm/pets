// This is the file that handles all of the server-side logic. The controller is called upon by the routes.
// The controller interacts with preloaded models to run database commands.
// The controller sends the response to the client.
// There can be many controllers in the server/controllers folder.

var mongoose = require('mongoose');
var Pet = mongoose.model('Pet');
module.exports = {

    getAll: function(req, res) {
        Pet.find({}, function(err, data) {
            if (err) {
                console.log("getAll error:", err); 
                res.json({message: "Error!", err: err}); 
            } else {
                res.json({message: "Success", data: data}) 
            }
         
        }) 
    },

    getOne: function(req, res) {
        Pet.findOne({_id: req.params.id}, function(err, data){
            if (err) {
                console.log("getOne error:", err); 
                res.json({message: "Error!", err: err}); 
            } else {
                console.log("getOne:", data); //
                res.json({message: "Success", data: data}) 
            }
        })    
    },

    deleteOne: function(req, res) {
        Pet.deleteOne({_id: req.params.id}, function(err, data){
            if (err) {
                console.log("deleteOne error:", err); 
                res.json({message: "Error!", err: err}); 
            } else {
                res.json({message: "DeleteOne success", data: data}) 
            }
        })    
    },

    editOne: function(req, res){
        Pet.update({_id:req.body._id}, req.body, {runValidators:true}, function(err, data) {
            if (err) {
                console.log("editOne error:", err); 
                res.json({message: "Error!", err: err}); 
            } else {
                res.json({message: "Success", data: data}) 
            }
        })
    },

    addOne: function(req, res) {
        console.log("Adding a new pet:", req.body)
        Pet.create(req.body, function(err, data) {
            if (err) {
                console.log("addOne error:", err); 
                res.json({message: "Error", err: err}); 
            } else {
                res.json({message: "Success", data: data});
            } 
        })
    },    


    // getAllRevByRestId: function(req, res) {
    //     Pet.findOne({_id: req.params.id}, function(err, data){
    //         if (err) {
    //             console.log("getRevByRestId error:", err); 
    //             res.json({message: "Error!", err: err}); 
    //         } else {
    //             console.log("getRevByRestId:", data); //*need to see object
    //             res.json({message: "Success", data: data}) 
    //         }
    //     })    
    // },

    

    // addRevbyRestId: function(req, res) {
    //     console.log("New review:", req.body)
    //     Pet.update({_id:req.body._id}, req.body, function(err, data) { ///?
    //     // Restaurant.update({_id:req.body._id}, {$push: {reviews: req.body.reviews}}, function(err, data) { //???
    //         if (err) {
    //             console.log("addRevbyRestId error:", err); 
    //             res.json({message: "Error", err: err}); 
    //         } else {
    //             res.json({message: "Success", data: data});
    //         } 
    //     })
    // },
}

