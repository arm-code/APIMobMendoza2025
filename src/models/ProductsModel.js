const pg = require('../config/db')

const getAllProducts = async() =>{

    const query ='SELECT * FROM tipos_producto;'
    try {
        const res = await pg.query(query)
        return res.rows
    } catch (error) {
        throw error
    }

}

module.exports ={ getAllProducts} 