const express = require("express");
const accountsRoutes = require("./src/accounts/routes");

const app = express();
const port = 9005;

app.use(express.json());
const cors = require("cors");
app.use(cors({
    origin: '*'
}));

//route
app.get("/", (req, res)=> {
    res.send("Who will the Super Bowl??");
})

app.use("/api/accounts", accountsRoutes);

app.listen(port, () => console.log('running on ${port}'));