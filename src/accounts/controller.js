const pool = require('../../db');
const queries = require('./queries');

const getAccounts = (req, res) => {
    pool.query(queries.getAccounts,(error, results)=> {
        if(error)throw error;
        res.status(200).json(results.rows);
    });
};

module.exports = {
    getAccounts,
};