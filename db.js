const Pool = require("pg").Pool;

const pool = new Pool({
    user: "jeffreyjseaman",
    password: "kmbkpIXlU3EMe2iB1qS5TWrs7f2nngXw",
    host: "dpg-cucmet1opnds73aj7dag-a",
    database: "wine_xxgq",
    port: 5432,
});

module.exports = pool;
