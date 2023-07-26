const db = require('../../database/index');

class SalesRepository {
  async findAll(orderBy = 'ASC') {
    const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
    const rows = await db.query(`
    SELECT *
    FROM sales
    ORDER BY salepname ${direction}
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

  async create({
    saledate, salepname, saleeemail, saleccpf,
  }) {
    const [row] = await db.query(`
      INSERT INTO sales(saledate, salepname, saleeemail, saleccpf)
      VALUES ($1, $2, $3, $4)
      RETURNING *
    `, [saledate, salepname, saleeemail, saleccpf]);

    return row;
  }

  async update(id, {
    saledate, salepname, saleeemail, saleccpf,
  }) {
    const [row] = await db.query(`
      UPDATE sales
      SET saledate = $1, salepname = $2, saleeemail = $3, saleccpf = $4
      WHERE id = $5
      RETURNING *
    `, [saledate, salepname, saleeemail, saleccpf, id]);

    return row;
  }
}

module.exports = new SalesRepository();
