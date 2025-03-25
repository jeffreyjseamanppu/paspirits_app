const Pool = require("pg").Pool;

const pool = new Pool({
    //user: "jseaman",
    user: "postgres",
    //password: "6rKRAV1z4OBSntzILbVrxDiPSLxRtnRD",
    password: "grapes",
    //host: "dpg-cuhbffi3esus73ch0bug-a",
    host: "localhost",
    database: "paspirits",
    port: 5432,
});

module.exports = pool;
