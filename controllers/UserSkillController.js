const userSkillModel = require ('../models/UserSkill');

const  getUserSkills = (req,res) => {
    userSkillModel.getAllUserSkills()
    .then(results => res.status(201).json(results))
    .catch(error => res.status(500).json(error));
};

const  getUserSkill = (req,res) =>{
    const {id} = req.params
    userSkillModel
    .getUserSkill(id)
    .then(results => res.status(201).json(results))
    .catch(error => res.status(500).json(error));
};

const  insertUserSkill = (req,res) => {
    const {id_user,id_skill} = req.body
    userSkillModel
    .insertUserSkill({id_user,id_skill})
    .then(results => res.status(201).json(results))
    .catch(error => res.status(500).json(error));
};

const  updateUserSkill = (req,res) => {
    const {id} = req.params
    const {id_user,id_skill} = req.body
    userSkillModel
    .updateUserSkill(id,{id_user,id_skill})
    .then(results => res.status(201).json(results))
    .catch(error => res.status(500).json(error));
};

const  deleteUserSkill = (req,res) => {
    const {id} = req.params
    
    userSkillModel
    .deleteUserSkill(id)
    .then(results => res.status(201).json(results))
    .catch(error => res.status(500).json(error));
};

module.exports = {
    getUserSkill,
    getUserSkills,
    insertUserSkill,
    updateUserSkill,
    deleteUserSkill
}