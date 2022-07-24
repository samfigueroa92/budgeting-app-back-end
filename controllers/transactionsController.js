const express = require("express");
const transactions = express.Router();
const transactionsData = require("../models/transactions.js");

transactions.get("/", (req, res) => {
    res.json(transactionsData)
});

transactions.get("/:index", (req, res) => {
    const { index } = req.params;
    if(transactionsData[index]){
        res.json(transactionsData[index])
    }else{
        res.status(404).send("no transaction found")
    };
});

module.exports = transactions;