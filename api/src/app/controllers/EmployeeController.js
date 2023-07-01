const EmployeesRepository = require('../repositories/EmployeesRopository');
// const isValidUUID = require('../utils/isValidUUID');

class EmployeeController {
  async index(request, response) {
    const { orderBy } = request.query;
    const employees = await EmployeesRepository.findAll(orderBy);

    console.log({ employees });
    response.json(employees);
  }

  show() { }

  delete() { }

  store() { }

  update() { }
}

module.exports = new EmployeeController();
