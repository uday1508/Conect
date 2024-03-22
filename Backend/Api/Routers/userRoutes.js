const express = require('express');
const router = express.Router();

const {createUser,login} = require('../Controllres/UserController.js');
router.route("/register").post(createUser);
router.route("/login").post(login);
module.exports = router;