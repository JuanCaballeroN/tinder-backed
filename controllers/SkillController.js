const skillModel = require ('../models/Skill');

const  getSkills = (req,res) => {
    skillModel.getAllSkills()
    .then(results => res.status(201).json(results))
    .catch(error => res.status(500).json(error));
};

const  getSkill = (req,res) =>{
    const {id} = req.params
    skillModel
    .getSkill(id)
    .then(results => res.status(201).json(results))
    .catch(error => res.status(500).json(error));
};

const  insertSkill = (req,res) => {
    const {description} = req.body
    skillModel
    .insertSkill({description})
    .then(results => res.status(201).json(results))
    .catch(error => res.status(500).json(error));
};

const  updateSkill = (req,res) => {
    const {id} = req.params
    const {description} = req.body
    skillModel
    .updateSkill(id,{description})
    .then(results => res.status(201).json(results))
    .catch(error => res.status(500).json(error));
};

const  deleteSkill = (req,res) => {
    const {id} = req.params
    
    skillModel
    .deleteSkill(id)
    .then(results => res.status(201).json(results))
    .catch(error => res.status(500).json(error));
};

module.exports ={
    getSkill,
    getSkills,
    insertSkill,
    updateSkill,
    deleteSkill
};