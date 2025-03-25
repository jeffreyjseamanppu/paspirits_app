const express = require("express");
const helmet = require('helmet');
const cors = require("cors");

//Routes
const accountsRoutes = require("./src/accounts/routes");

const app = express();

const port = 9022;

app.use(express.json());
app.use(helmet()); //Sets HTTP headers for security like removing X-Powered-By, enabling CSP
app.use(cors({
    origin: '*'
}));

//route
app.get("/", (req, res) => {
    res.send("Who will the Super Bowl??");
})

app.use("/api/accounts", accountsRoutes);

app.listen(port, () => console.log('running on ${port}'));