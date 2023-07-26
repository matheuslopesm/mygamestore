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

  async findById(id) {
    const [row] = await db.query(`
    SELECT sales.*
    FROM sales
    WHERE sales.id = $1
    `, [id]);

    return row;
  }
}

module.exports = new SalesRepository();
