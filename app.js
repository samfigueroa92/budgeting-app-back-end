const express = require("express");
const app = express();
const transactionsController = require("./controllers/transactionsController.js");

app.get("/", (req,res) => {
    res.send("Welcome to Sam's Budget App")
});

app.use("/transactions", transactionsController);

app.get("*", (req, res) => {
    res.status(404).json({error: "page not found"})
});

module.exports = app;