const review = require("../models/review"); 

class ReviewController {
    getAll = async (req , res) =>{
        const reviews = await review.find()
        res.status(200).json({
            success : true,
            message : "Operation successful",
            data : {reviews}
        });
    }

    getOne = async (req , res) => {
        const id = req.params.id;
        const reviews = await review.findById(id);
        res.status(200).json({
            success : true,
            message : "Operation successful",
            data : {reviews}
        }); 
    }

    create = async (req , res) => {
        const {reviewerName, rating, comment, date} = req.body;
        const reviews = await review.create({reviewerName, rating, comment, date});
        res.status(201).json({
            success : true,
            message : "Operation successful",
            data : {reviews}
        });
    }

    update = async (req , res) => {
        const id = req.params.id;
        const {reviewerName, rating, comment, date} = req.body;
        const reviews = await review.findByIdAndUpdate(id , {reviewerName, rating, comment, date});
        res.status(200).json({
            success : true,
            message : "Operation successful",
            data : {reviews}
        });
    }

    remove = async (req , res) => {
        const id = req.params.id;
        const reviews = await review.findByIdAndDelete(id);
        res.status(200).json({
            success : true,
            message : "Deleted successful",
            data : {reviews}
        });
    }

}

module.exports = new ReviewController();