const service = require("../models/Service"); 

class ServiceController {
    getAll = async (req , res) =>{
        const services = await service.find()
        res.status(200).json({
            success : true,
            message : "Operation successful",
            data : {services}
        });
    }

    getOne = async (req , res) => {
        const id = req.params.id;
        const services = await service.findById(id);
        res.status(200).json({
            success : true,
            message : "Operation successful",
            data : {services}
        }); 
    }

    create = async (req , res) => {
        const {name, description, price, duration, isAvailable} = req.body;
        const services = await service.create({name, description, price, duration, isAvailable});
        res.status(201).json({
            success : true,
            message : "Operation successful",
            data : {services}
        });
    }

    update = async (req , res) => {
        const id = req.params.id;
        const {name, description, price, duration, isAvailable} = req.body;
        const services = await service.findByIdAndUpdate(id , {name, description, price, duration, isAvailable});
        res.status(200).json({
            success : true,
            message : "Operation successful",
            data : {services}
        });
    }

    remove = async (req , res) => {
        const id = req.params.id;
        const services = await service.findByIdAndDelete(id);
        res.status(200).json({
            success : true,
            message : "Deleted successful",
            data : {services}
        });
    }

}

module.exports = new ServiceController ();