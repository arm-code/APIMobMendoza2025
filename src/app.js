const express = require('express')
const bodyParser = require('body-parser')
const ProductsRoutes = require('./routes/ProducstRoutes')
const dotenv = require('dotenv')

dotenv.config()
const app = express()
const PORT = process.env.DB_PORT || 3000

app.use(bodyParser.json())
app.use('/products', ProductsRoutes)

app.listen(PORT, () =>{
    console.log(`Servidor escuchando en ${PORT}`)    
})