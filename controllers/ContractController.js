const contractModel = require ('../models/Contract');

const  getContracts = (req,res) => {
    contractModel.getAllContracts()
    .then(results => res.status(201).json(results))
    .catch(error => res.status(500).json(error));
};

const  getContract = (req,res) =>{
    const {contract_number} = req.params
    contractModel
    .getContract(contract_number)
    .then(results => res.status(201).json(results))
    .catch(error => res.status(500).json(error));
};

const  insertContract = (req,res) => {
    const {id_user,id_company,id_pay,initial_date,initial_place,contracted_time,state,qualification} = req.body
    contractModel
    .insertContract({id_user,id_company,id_pay,initial_date,initial_place,contracted_time,state,qualification})
    .then(results => res.status(201).json(results))
    .catch(error => res.status(500).json(error));
};

const  updateContract = (req,res) => {
    const {contract_number} = req.params
    const {id_user,id_company,id_pay,initial_date,initial_place,contracted_time,state,qualification} = req.body
    contractModel
    .updateContract(contract_number,{id_user,id_company,id_pay,initial_date,initial_place,contracted_time,state,qualification})
    .then(results => res.status(201).json(results))
    .catch(error => res.status(500).json(error));
};

const  deleteContract = (req,res) => {
    const {contract_number} = req.params
    
    contractModel
    .deleteContract(contract_number)
    .then(results => res.status(201).json(results))
    .catch(error => res.status(500).json(error));
};

module.exports = {
    getContracts,
    getContract,
    insertContract,
    updateContract,
    deleteContract
}