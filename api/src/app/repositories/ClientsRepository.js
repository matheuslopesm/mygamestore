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

  async findByCpf(ccpf) {
    const [row] = await db.query(`
    SELECT *
    FROM clients
    WHERE ccpf = $1
    `, [ccpf]);

    return row;
  }

  async delete(id) {
    const deleteOp = await db.query(`
    DELETE FROM clients
    WHERE id = $1
    RETURNING *
    `, [id]);

    return deleteOp;
  }

  async create({
    cname, csurname, ccpf, cemail,
  }) {
    const [row] = await db.query(`
      INSERT INTO clients(cname, csurname, ccpf, cemail)
      VALUES ($1, $2, $3, $4)
      RETURNING *
    `, [cname, csurname, ccpf, cemail]);

    return row;
  }

}

module.exports = new ClientsRepository();
