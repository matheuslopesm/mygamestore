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

  async findByName(ename) {
    const [row] = await db.query(`
    SELECT *
    FROM employees
    WHERE ename = $1
    `, [ename]);

    return row;
  }
}

module.exports = new EmployeeRepository();
