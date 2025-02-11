const Pool = require("pg").Pool;

const pool = new Pool({
    user: "jseaman",
    password: "6rKRAV1z4OBSntzILbVrxDiPSLxRtnRD",
    host: "dpg-cuhbffi3esus73ch0bug-a",
    database: "paspirits",
    port: 5432,
});

module.exports = pool;
