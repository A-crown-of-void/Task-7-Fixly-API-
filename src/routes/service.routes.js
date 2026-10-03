const express = require("express");
const router = express.Router();

const serviceController = require("../controllers/service.controller");

router.get("/" , serviceController.getAll);

router.get("/:id" , serviceController.getOne);

router.post("/" , serviceController.create);

router.patch("/:id" , serviceController.update);

router.delete("/:id" , serviceController.remove);

module.exports = router;