const userModel = require ('../models/User');

const  getUsers = (req,res) => {
    userModel.getAllUsers()
    .then(results => res.status(201).json(results))
    .catch(error => res.status(500).json(error));
};

const  getUser = (req,res) =>{
    const {id} = req.params
    userModel
    .getUser(id)
    .then(results => res.status(201).json(results))
    .catch(error => res.status(500).json(error));
};

const  insertUser = (req,res) => {
    const {first_name, last_name, fee} = req.body
    userModel
    .insertUser({first_name, last_name, fee})
    .then(results => res.status(201).json(results))
    .catch(error => res.status(500).json(error));
};

const  updateUser = (req,res) => {
    const {id} = req.params
    const {first_name, last_name, fee} = req.body
    userModel
    .updateUser(id,{first_name, last_name, fee})
    .then(results => res.status(201).json(results))
    .catch(error => res.status(500).json(error));
};

const  deleteUser = (req,res) => {
    const {id} = req.params
    
    userModel
    .deleteUser(id)
    .then(results => res.status(201).json(results))
    .catch(error => res.status(500).json(error));
};

module.exports = {
    getUser,
    getUsers,
    insertUser,
    updateUser,
    deleteUser
};