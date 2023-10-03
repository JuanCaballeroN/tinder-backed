const companyModel = require ('../models/Company');

const  getCompanys = (req,res) => {
    companyModel.getAllCompanys()
    .then(results => res.status(201).json(results))
    .catch(error => res.status(500).json(error));
};
const  getCompany = (req,res) =>{
    const {id} = req.params
    companyModel
    .getCompany(id)
    .then(results => res.status(201).json(results))
    .catch(error => res.status(500).json(error));
};

const  insertCompany = (req,res) => {
    const {company_name} = req.body
    companyModel
    .insertCompany({company_name})
    .then(results => res.status(201).json(results))
    .catch(error => res.status(500).json(error));
};

const  updateCompany = (req,res) => {
    const {id} = req.params
    const {} = req.body
    companyModel
    .updateCompany(id,{company_name})
    .then(results => res.status(201).json(results))
    .catch(error => res.status(500).json(error));
};

const  deleteCompany = (req,res) => {
    const {id} = req.params
    
    companyModel
    .deleteCompany(id)
    .then(results => res.status(201).json(results))
    .catch(error => res.status(500).json(error));
};

module.exports = {
    getCompanys,
    getCompany,
    insertCompany,
    updateCompany,
    deleteCompany
}