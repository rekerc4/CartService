const express = require("express");
const router = express.Router();

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
    res.send(cart);
});

module.exports = router; 