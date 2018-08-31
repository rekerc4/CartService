const express = require("express");
const router = express.Router();
const pool = require("../connection");

let iterator = 0; 

const cartItems = [
    {
        id: iterator,
        product: "soap", 
        price: "2.00", 
        quantity: 12
    }, 
    {
        id: iterator++,
        product: "bread", 
        price: "3.00", 
        quantity: 13
    }
]

router.get("/router", (req, res) => {
    pool.query("SELECT * FROM cart").then((results) => {
        res.send(results.rows); 
    });
});

router.post("/router/", (req, res) => {
    console.log(req.name); 
    pool.query("INSERT INTO cart(product, price, quantity) VALUES($1::text, $2::text, $3::int)", [req.body.name, req.body.price, req.body.quantity]).then(() => {
        pool.query("SELECT * FROM cart").then((results) => {
            res.send(results.rows); 
        });
    });
});

router.put("/router/:id", (req, res) => {
    pool.query("UPDATE table SET item=$::text WHERE id=$2::int", [req.body.item, parseInt(req.params.id)]).then(() => {
        pool.query("SELECT * FROM cart").then((results) => {
            res.send(results.rows); 
        });
    }); 
});

router.delete("/router/:id", (req, res) => {
    console.log("delete ran");
    pool.query("DELETE FROM cart WHERE id=$1::int", [parseInt(req.params.id)]).then(() => {
        pool.query("SELECT * FROM cart").then((results) => {
            res.send(results.rows); 
        });
    });
});

module.exports = router; 