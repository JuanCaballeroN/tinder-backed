const connection = require('../knexfile')['development'];
const database = require('knex')(connection);

const getAllPays = () =>{
    return database('pays');
};
const getPay  = (idPay) =>{
    return database('pays')
    .where({id: idPay});
};

const insertPay = (pay) =>{
    return database('pays')
    .insert(pay);
};

const updatePay = (idPay,pay) =>{
    return database('pays')
    .where('id','=',idPay)
    .update(pay)
};

const deletePay = (idPay) =>{
    return database('pays')
    .where('id','=',idPay)
    .del()
};

module.exports ={
    getAllPays,
    getPay,
    insertPay,
    updatePay,
    deletePay
}