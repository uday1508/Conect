const express = require('express');
const router = express.Router();

const {createUser} = reuire('../Controllres/UserController.js')
router.route("/register").post(createUser);

module.exports = router;