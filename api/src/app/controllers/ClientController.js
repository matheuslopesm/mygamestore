const ClientsRepository = require('../repositories/ClientsRepository');
// const isValidUUID = require('../utils/isValidUUID');

class ClientController {

  async index(request, response) {
    const { orderBy } = request.query;
    const clients = await ClientsRepository.findAll(orderBy);

    console.log({ clients });
    response.json(clients);
  }

  show() { }

  store() { }

  delete() { }

  update() { }

}

module.exports = new ClientController();
