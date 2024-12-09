const productsModel = require('../models/ProductsModel')

const getAllProducts = async(req, res) =>{
    try {
        const products = await productsModel.getAllProducts();
        res.json(products)
    } catch (error) {
        res.status(500).json({error: error.message})
        
    }
}

module.exports = {getAllProducts}