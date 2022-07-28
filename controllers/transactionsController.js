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

transactions.post("/", (req, res) => {
    transactionsData.push(req.body);
    res.json(transactionsData[transactionsData.length - 1]);
});

transactions.put("/:index", (req, res) => {
    const { index } = req.params;
    transactionsData[index] = req.body;
    res.status(200).json(transactionsData[index])
});

transactions.delete("/:index", (req, res) => {
    const { index } = req.params;
    res.status(200).json(transactionsData.splice(index, 1));
});

module.exports = transactions;