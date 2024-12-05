
const express = require('express')
const router = express.Router()
const productsController = require('../controllers/ProductsController')

router.get('/', productsController.getAllProducts)

module.exports = router