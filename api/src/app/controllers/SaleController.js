const SalesRepository = require('../repositories/SalesRepository');
// const isValidUUID = require('../utils/isValidUUID');

class SaleController {
  async index(request, response) {
    const { orderBy } = request.query;
    const sales = await SalesRepository.findAll(orderBy);

    console.log({ sales });
    response.json(sales);
  }
}

module.exports = new SaleController();
