const request = require("../models/Request"); 

class RequestController {
    getAll = async (req , res) =>{
        const requests = await request.find()
        res.status(200).json({
            success : true,
            message : "Operation successful",
            data : {requests}
        });
    }

    getOne = async (req , res) => {
        const id = req.params.id;
        const requests = await request.findById(id);
        res.status(200).json({
            success : true,
            message : "Operation successful",
            data : {requests}
        }); 
    }

    create = async (req , res) => {
        const {title, description, status, priority, requestedDate} = req.body;
        const requests = await request.create({title, description, status, priority, requestedDate});
        res.status(201).json({
            success : true,
            message : "Operation successful",
            data : {requests}
        });
    }

    update = async (req , res) => {
        const id = req.params.id;
        const {title, description, status, priority, requestedDate} = req.body;
        const requests = await request.findByIdAndUpdate(id , {title, description, status, priority, requestedDate});
        res.status(200).json({
            success : true,
            message : "Operation successful",
            data : {requests}
        });
    }

    remove = async (req , res) => {
        const id = req.params.id;
        const requests = await request.findByIdAndDelete(id);
        res.status(200).json({
            success : true,
            message : "Deleted successful",
            data : {requests}
        });
    }

}

module.exports = new RequestController ();