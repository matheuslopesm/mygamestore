const SalesRepository = require('../repositories/SalesRepository');
const isValidUUID = require('../utils/isValidUUID');

class SaleController {
  async index(request, response) {
    const { orderBy } = request.query;
    const sales = await SalesRepository.findAll(orderBy);

    console.log({ sales });
    response.json(sales);
  }

  async show(request, response) {
    const { id } = request.params;

    if (!isValidUUID(id)) {
      return response.status(400).json({ error: 'Invalid sale id' });
    }

    const sale = await SalesRepository.findById(id);

    if (!sale) {
      return response.status(400).json({ error: 'Sale not found' });
    }

    response.json(sale);
  }

  async delete(request, response) {
    const { id } = request.params;

    if (!isValidUUID(id)) {
      return response.status(400).json({ error: 'Invalid sale id' });
    }

    await SalesRepository.delete(id);

    response.sendStatus(204);
  }
}

module.exports = new SaleController();
