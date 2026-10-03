const express = require("express");
const router = express.Router();

const customerController = require("../controllers/customer.controller");

router.get("/" , customerController.getAll);

router.get("/:id" , customerController.getOne);

router.post("/" , customerController.create);

router.patch("/:id" , customerController.update);

router.delete("/:id" , customerController.remove);

module.exports = router;