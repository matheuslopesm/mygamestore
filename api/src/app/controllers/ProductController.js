const ProductsRepository = require('../repositories/ProductsRepositories');
// const isValidUUID = require('../utils/isValidUUID');

class ProductController {
  async index(request, response) {
    const { orderBy } = request.query;
    const products = await ProductsRepository.findAll(orderBy);

    console.log({ products });
    response.json(products);
  }

  show() {

  }

  delete() {

  }

  store() {

  }

  update() {

  }
}

module.exports = new ProductController();
