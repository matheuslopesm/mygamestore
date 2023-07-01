const ProductsRepository = require('../repositories/ProductsRepository');
const isValidUUID = require('../utils/isValidUUID');

class ProductController {
  async index(request, response) {
    const { orderBy } = request.query;
    const products = await ProductsRepository.findAll(orderBy);

    console.log({ products });
    response.json(products);
  }

  async show(request, response) {
    const { id } = request.params;

    if (!isValidUUID(id)) {
      return response.status(400).json({ error: 'Invalid product id' });
    }

    const product = await ProductsRepository.findById(id);

    if (!product) {
      return response.status(400).json({ error: 'Product not found' });
    }

    response.json(product);
  }

  async delete(request, response) {
    const { id } = request.params;

    if (!isValidUUID(id)) {
      return response.status(400).json({ error: 'Invalid product id' });
    }

    await ProductsRepository.delete(id);

    response.status(204);
  }

  async store(request, response) {
    const {
      pname, pvalue, pcompany, pdescription,
    } = request.body;

    if (!pname) {
      return response.status(400).json({ error: 'Name is required' });
    }

    if (!pvalue) {
      return response.status(400).json({ error: 'Value is required' });
    }

    const product = await ProductsRepository.create({
      pname,
      pvalue,
      pcompany,
      pdescription,
    });

    return response.status(201).json(product);
  }

  async update(request, response) {
    const { id } = request.params;
    const {
      pname, pvalue, pcompany, pdescription,
    } = request.body;

    if (!isValidUUID(id)) {
      return response.status(400).json({ error: 'Invalid product id ' });
    }

    if (!pname) {
      return response.status(400).json({ error: 'Name is required' });
    }

    const product = await ProductsRepository.update(id, {
      pname,
      pvalue,
      pcompany,
      pdescription,
    });

    response.json(product);
  }
}

module.exports = new ProductController();
