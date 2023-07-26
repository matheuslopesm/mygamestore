const db = require('../../database/index');

class SalesRepository {
  async findAll(orderBy = 'ASC') {
    const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
    const rows = await db.query(`
    SELECT *
    FROM sales
    ORDER BY product_name ${direction}
    `);

    return rows;
  }

}

module.exports = new SalesRepository();
