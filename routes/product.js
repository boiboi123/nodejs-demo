import express from "express";

const router = express.Router();

//list products
router.get('/products', (req, res) => {
    res.json({
        mess: "hello hoàng hữu đức"
    })
    console.log('products list');
});

module.exports = router;