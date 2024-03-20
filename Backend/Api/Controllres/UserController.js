const User = require('../Models/user');

const createUser = async (req, res) => {
    const { name, email, password, image } = req.body;
    const newUser = new User({ name, email, password, image });

    newUser.save().then(() => {
      res.status(200).json({ message: "User registered successfully" });
    })
    .catch((err) => {
      console.log("Error registering user", err);
      res.status(500).json({ message: "Error registering the user!" });
    });
  };


  module.exports = {createUser};


  