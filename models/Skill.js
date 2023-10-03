const connection = require('../knexfile')['development'];
const database = require('knex')(connection);

const getAllSkills = () =>{
    return database('skills');
};

const getSkill  = (idSkill) =>{
    return database('skills')
    .where({id: idSkill});
};

const insertSkill = (skill) =>{
    return database('skills')
    .insert(skill);
};

const updateSkill = (idSkill,skill) =>{
    return database('skills')
    .where('id','=',idSkill)
    .update(skill)
};

const deleteSkill = (idSkill) =>{
    return database('skills')
    .where('id','=',idSkill)
    .del()
};

module.exports = {
    getAllSkills,
    getSkill,
    insertSkill,
    updateSkill,
    deleteSkill
}