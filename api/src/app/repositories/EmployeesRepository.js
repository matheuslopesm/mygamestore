const db = require('../../database/index');

class EmployeeRepository {
  async findAll(orderBy = 'ASC') {
    const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
    const rows = await db.query(`
    SELECT *
    FROM employees
    ORDER BY ename ${direction}
    `);

    return rows;
  }

  async findById(id) {
    const [row] = await db.query(`
    SELECT employees.*
    FROM employees
    WHERE employees.id = $1
    `, [id]);

    return row;
  }

  async findByEmail(eemail) {
    const [row] = await db.query(`
    SELECT *
    FROM employees
    WHERE eemail = $1
    `, [eemail]);

    return row;
  }

  async delete(id) {
    const deleteOp = await db.query(`
      DELETE FROM employees
      WHERE id = $1
      RETURNING *
    `, [id]);

    return deleteOp;
  }

  async create({
    ename, esurname, eemail,
  }) {
    const [row] = await db.query(`
      INSERT INTO products(ename, esurname, eemail)
      VALUES ($1, $2, $3)
      RETURNING *
    `, [ename, esurname, eemail]);

    return row;
  }
}

module.exports = new EmployeeRepository();
