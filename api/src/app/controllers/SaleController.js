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

  async store(request, response) {
    const {
      saledate, salepname, saleeemail, saleccpf,
    } = request.body;

    if (!saledate) {
      return response.status(400).json({ error: 'Date is required' });
    }

    if (!salepname) {
      return response.status(400).json({ error: 'Product name is required' });
    }

    if (!saleeemail) {
      return response.status(400).json({ error: 'Employee e-mail is required' });
    }

    if (!saleccpf) {
      return response.status(400).json({ error: 'Client cpf is required' });
    }

    const sale = await SalesRepository.create({
      saledate,
      salepname,
      saleeemail,
      saleccpf,
    });

    response.status(201).json(sale);
  }

  async update(request, response) {
    const { id } = request.params;
    const {
      saledate, salepname, saleeemail, saleccpf,
    } = request.body;

    if (!isValidUUID(id)) {
      return response.status(400).json({ error: 'Invalid sale id' });
    }

    if (!saledate) {
      return response.status(400).json({ error: 'Date is required' });
    }

    if (!salepname) {
      return response.status(400).json({ error: 'Product name is required' });
    }

    if (!saleeemail) {
      return response.status(400).json({ error: 'Employee e-mail is required' });
    }

    if (!saleccpf) {
      return response.status(400).json({ error: 'Client cpf is required' });
    }

    const sale = await SalesRepository.update(id, {
      saledate,
      salepname,
      saleeemail,
      saleccpf,
    });

    response.json(sale);
  }
}

module.exports = new SaleController();
