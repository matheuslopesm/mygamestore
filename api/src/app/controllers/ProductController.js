const ProductsRepository = require('../repositories/ProductsRepositories');
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

  delete() {

  }

  store() {

  }

  update() {

  }
}

module.exports = new ProductController();
