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
}

module.exports = new ProductsRepository();
