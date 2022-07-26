const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const transactionsController = require("./controllers/transactionsController.js");

app.get("/", (req, res) => {
    res.send("Welcome to Sam's Budget App")
});

app.use("/transactions", transactionsController);

app.get("*", (req, res) => {
    res.status(404).json({error: "page not found"})
});

module.exports = app;