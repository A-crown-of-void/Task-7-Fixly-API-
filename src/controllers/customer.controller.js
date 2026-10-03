const customer = require("../models/customer"); 

class CustomerController {
    getAll = async (req , res) =>{
        const customers = await customer.find()
        res.status(200).json({
            success : true,
            message : "Operation successful",
            data : {customers}
        });
    }

    getOne = async (req , res) => {
        const id = req.params.id;
        const customers = await customer.findById(id);
        res.status(200).json({
            success : true,
            message : "Operation successful",
            data : {customers}
        }); 
    }

    create = async (req , res) => {
        const {name, phone, email, address, notes} = req.body;
        const customers = await customer.create({name, phone, email, address, notes});
        res.status(201).json({
            success : true,
            message : "Operation successful",
            data : {customers}
        });
    }

    update = async (req , res) => {
        const id = req.params.id;
        const {name, phone, email, address, notes} = req.body;
        const customers = await customer.findByIdAndUpdate(id , {name, phone, email, address, notes});
        res.status(200).json({
            success : true,
            message : "Operation successful",
            data : {customers}
        });
    }

    remove = async (req , res) => {
        const id = req.params.id;
        const customers = await customer.findByIdAndDelete(id);
        res.status(200).json({
            success : true,
            message : "Deleted successful",
            data : {customers}
        });
    }

}

module.exports = new CustomerController ();