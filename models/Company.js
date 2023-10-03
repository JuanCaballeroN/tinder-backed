const connection = require('../knexfile')['development'];
const database = require('knex')(connection);

const getAllCompanys = () =>{
    return database('companys');
};

const getCompany  = (idCompany) =>{
    return database('companys')
    .where({id: idCompany});
};

const insertCompany = (Company) =>{
    return database('companys')
    .insert(Company);
};

const updateCompany = (idCompany,Company) =>{
    return database('companys')
    .where('id','=',idCompany)
    .update(Company)
};
const deleteCompany = (idCompany) =>{
    return database('companys')
    .where('id','=',idCompany)
    .del()
};


module.exports ={
    getAllCompanys,
    getCompany,
    insertCompany,
    updateCompany,
    deleteCompany
}