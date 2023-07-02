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

  async delete(request, response) {
    const { id } = request.params;

    if (!isValidUUID(id)) {
      return response.status(400).json({ error: 'Invalid client id' });
    }

    await ClientsRepository.delete(id);

    response.status(204);
  }

  async store(request, response) {
    const {
      cname, csurname, ccpf, cemail,
    } = request.body;

    if (!cname) {
      return response.status(400).json({ error: 'Name is required' });
    }

    if (!ccpf) {
      return response.status(400).json({ error: 'CPF is required' });
    }

    if (ccpf || cemail) {
      const clientExists = await ClientsRepository.findByCpfOrEmail(ccpf, cemail);

      if (clientExists) {
        return response.status(400).json({ error: 'This CPF or Email already exists' });
      }
    }

    const client = await ClientsRepository.create({
      cname,
      csurname,
      ccpf,
      cemail,
    });

    return response.status(201).json(client);
  }

  async update(request, response) {
    const { id } = request.params;
    const {
      cname, csurname, ccpf, cemail,
    } = request.body;

    if (!isValidUUID(id)) {
      return response.status(400).json({ error: 'Invalid client id ' });
    }

    if (!cname) {
      return response.status(400).json({ error: 'Name is required' });
    }

    const client = await ClientsRepository.update(id, {
      cname,
      csurname,
      ccpf,
      cemail,
    });

    response.json(client);
  }

}

module.exports = new ClientController();
