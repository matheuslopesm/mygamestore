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
}

module.exports = new EmployeeRepository();
