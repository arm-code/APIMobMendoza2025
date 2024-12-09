const pg = require('../config/db')

const getAllProducts = async () => {
    const query = 'SELECT id_producto, nombre, descripcion, precio_renta, estado FROM productos;';
    try {
      const res = await pg.query(query);
      return res.rows;
    } catch (error) {
      throw error;
    }
  };
  
  const getAllPacks = async () => {
    // Consulta SQL para mostrar productos de tipo paquete en columnas separadas con los productos que integran el paquete
  
    const query = `SELECT 
      p.nombre AS nombre,
      p.precio,
      MAX(CASE WHEN pr.nombre = 'Mesa Grande' THEN pr.nombre ELSE NULL END) AS Producto1,
      MAX(CASE WHEN pr.nombre = 'Silla Plegable' THEN pr.nombre ELSE NULL END) AS Producto2,    
      MAX(CASE WHEN pr.nombre = 'Mesa Grande' THEN dp.cantidad ELSE NULL END) AS Cantidad1,
      MAX(CASE WHEN pr.nombre = 'Silla Plegable' THEN dp.cantidad ELSE NULL END) AS Cantidad2
  FROM 
      Paquetes p
      INNER JOIN DetallePaquetes dp ON p.id_paquete = dp.id_paquete
      INNER JOIN Productos pr ON dp.id_producto = pr.id_producto
  GROUP BY 
      p.id_paquete, p.nombre, p.precio
  ORDER BY 
      p.id_paquete;`;

      try {
        const res = await pg.query(query);
        return res.rows;
      } catch (error) {
        throw error;
      }
}


module.exports = { getAllProducts, getAllPacks };