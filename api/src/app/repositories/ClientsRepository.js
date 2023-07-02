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

  async findById(id) {
    const [row] = await db.query(`
    SELECT clients.*
    FROM clients
    WHERE clients.id = $1
    `, [id]);

    return row;
  }

}

module.exports = new ClientsRepository();