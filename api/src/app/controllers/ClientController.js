const ClientsRepository = require('../repositories/ClientsRepository');
const isValidUUID = require('../utils/isValidUUID');

class ClientController {

  async index(request, response) {
    const { orderBy } = request.query;
    const clients = await ClientsRepository.findAll(orderBy);

    console.log({ clients });
    response.json(clients);
  }

  async show(request, response) {
    const { id } = request.params;

    if (!isValidUUID(id)) {
      return response.status(400).json({ error: 'Invalid client id' });
    }

    const client = await ClientsRepository.findById(id);

    if (!client) {
      return response.status(400).json({ error: 'Client not found' });
    }

    response.json(client);
  }

  store() { }

  delete() { }

  update() { }

}

module.exports = new ClientController();
