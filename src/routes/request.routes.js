const express = require("express");
const router = express.Router();

const requestController = require("../controllers/request.controller");

router.get("/" , requestController.getAll);

router.get("/:id" , requestController.getOne);

router.post("/" , requestController.create);

router.patch("/:id" , requestController.update);

router.delete("/:id" , requestController.remove);

module.exports = router;