const connection = require('../knexfile')['development'];
const database = require('knex')(connection);

const getAllUsers = () =>{
    return database('users');
};

const getUser  = (idUser) =>{
    return database('users')
    .where({id: idUser});
};

const insertUser = (user) =>{
    return database('users')
    .insert(user);
};

const updateUser = (idUser,user) =>{
    return database('users')
    .where('id','=',idUser)
    .update(user)
};
const deleteUser = (idUser) =>{
    return database('users')
    .where('id','=',idUser)
    .del()
};


module.exports ={
    getAllUsers,
    getUser,
    insertUser,
    updateUser,
    deleteUser
}
