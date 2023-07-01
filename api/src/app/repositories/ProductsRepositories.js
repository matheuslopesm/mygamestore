const db = require('../../database/index');

class ProductsRepository {
  async findAll(orderBy = 'ASC') {
    const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
    const rows = await db.query(`
    SELECT *
    FROM products
    ORDER BY pname ${direction}
    `);

    return rows;
  }

  async findById(id) {
    const [row] = await db.query(`
    SELECT products.*
    FROM products
    WHERE products.id = $1
    `, [id]);

    return row;
  }
}

module.exports = new ProductsRepository();
