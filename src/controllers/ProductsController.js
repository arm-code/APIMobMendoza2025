const productsModel = require('../models/ProductsModel')

const getAllProducts = async(req, res) =>{
    try {
        const products = await productsModel.getAllProducts();
        res.json(products)
    } catch (error) {
        res.status(500).json({error: error.message})
        
    }
}

const getAllPacks = async(req, res) => {
    try {
        const packs = await productsModel.getAllPacks();
        res.json(packs)
    } catch (error) {
        res.status(500).json({error: error.message})
        
    }
}

module.exports = {getAllProducts, getAllPacks}