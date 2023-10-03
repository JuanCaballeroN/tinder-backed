const payModel = require ('../models/Pay');

const  getPays = (req,res) => {
    payModel.getAllPays()
    .then(results => res.status(201).json(results))
    .catch(error => res.status(500).json(error));
};

const  getPay = (req,res) =>{
    const {id} = req.params
    payModel
    .getPay(id)
    .then(results => res.status(201).json(results))
    .catch(error => res.status(500).json(error));
};

const  insertPay = (req,res) => {
    const {num_contract,anticip_value,residue,date_pay} = req.body
    payModel
    .insertPay({num_contract,anticip_value,residue,date_pay})
    .then(results => res.status(201).json(results))
    .catch(error => res.status(500).json(error));
};

const  updatePay = (req,res) => {
    const {id} = req.params
    const {num_contract,anticip_value,residue,date_pay} = req.body
    payModel
    .updatePay(id,{num_contract,anticip_value,residue,date_pay})
    .then(results => res.status(201).json(results))
    .catch(error => res.status(500).json(error));
};

const  deletePay = (req,res) => {
    const {id} = req.params
    
    payModel
    .deleteSkill(id)
    .then(results => res.status(201).json(results))
    .catch(error => res.status(500).json(error));
};

module.exports = {
    getPay,
    getPays,
    insertPay,
    updatePay,
    deletePay
}