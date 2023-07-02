const db = require('../../database/index');

class ClientsRepository {
  async findAll(orderBy = 'ASC') {
    const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
    const rows = await db.query(`
      SELECT *
      from clients
      ORDER BY cname ${direction}
    `);

    return rows;
  }

}

module.exports = new ClientsRepository();
