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

  async delete(id) {
    const deleteOp = await db.query(`
      DELETE FROM sales
      WHERE id = $1
      RETURNING *
    `, [id]);

    return deleteOp;
  }
}

module.exports = new SalesRepository();
