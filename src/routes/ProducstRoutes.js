
const express = require('express')
const router = express.Router()
const productsController = require('../controllers/ProductsController')

router.get('/', productsController.getAllProducts)
router.get('/packs', productsController.getAllPacks)

module.exports = router