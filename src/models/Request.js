const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema({
    title:{
        type : String,
        required : true 
    },  
    description: {
        type : String,
        required : true
    }, 
    status:{
        type: String,
        required : true,
        enum : [

        ]
    }, 
    priority:{
        type: String,
        required : true,
        enum : [

        ]

    }, 
    requestedDate : {
        type : Date,
        required : true
    } 

}, {timestamps: true});

const Request = mongoose.model("Request" , requestSchema)

module.exports = Request;