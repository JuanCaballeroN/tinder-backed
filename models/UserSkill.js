const connection = require('../knexfile')['development'];
const database = require('knex')(connection);

const getAllUserSkills = () =>{
    return database('user-skills');
};
const getUserSkill  = (idUserSkill) =>{
    return database('UserSkill')
    .where({id: idUserSkill});
};

const insertUserSkill = (UserSkill) =>{
    return database('user-skills')
    .insert(UserSkill);
};

const updateUserSkill = (idUserSkill,UserSkill) =>{
    return database('user-skills')
    .where('id','=',idUserSkill)
    .update(UserSkill)
};

const deleteUserSkill = (idUserSkill) =>{
    return database('user-skills')
    .where('id','=',idUserSkill)
    .del()
};

module.exports = {
    getAllUserSkills,
    getUserSkill,
    insertUserSkill,
    updateUserSkill,
    deleteUserSkill
}
