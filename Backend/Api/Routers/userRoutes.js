const express = require('express');
const router = express.Router();

const {createUser,login,getAllUsers} = require('../Controllres/UserController.js');
router.route("/register").post(createUser);
router.route("/login").post(login);
router.route("/users/:userId").get(getAllUsers);
module.exports = router;