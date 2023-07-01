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

  async findByName(pname) {
    const [row] = await db.query(`
    SELECT *
    FROM products
    WHERE pname = $1
    `, [pname]);

    return row;
  }

  async delete(id) {
    const deleteOp = await db.query(`
      DELETE FROM products
      WHERE id = $1
      RETURNING *
    `, [id]);

    return deleteOp;
  }

  async create({
    pname, pvalue, pcompany, pdescription,
  }) {
    const [row] = await db.query(`
      INSERT INTO products(pname, pvalue, pcompany, pdescription)
      VALUES ($1, $2, $3, $4)
      RETURNING *
    `, [pname, pvalue, pcompany, pdescription]);

    return row;
  }

  async update(id, {
    pname, pvalue, pcompany, pdescription,
  }) {
    const [row] = await db.query(`
      UPDATE products
      SET pname = $1, pvalue = $2, pcompany = $3, pdescription = $4
      WHERE id = $5
      RETURNING *
    `, [pname, pvalue, pcompany, pdescription, id]);

    return row;
  }
}

module.exports = new ProductsRepository();
