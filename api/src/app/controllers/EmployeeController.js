const EmployeesRepository = require('../repositories/EmployeesRepository');
const isValidUUID = require('../utils/isValidUUID');

class EmployeeController {
  async index(request, response) {
    const { orderBy } = request.query;
    const employees = await EmployeesRepository.findAll(orderBy);

    console.log({ employees });
    response.json(employees);
  }

  async show(request, response) {
    const { id } = request.params;

    if (!isValidUUID(id)) {
      return response.status(400).json({ error: 'Invalid employee id' });
    }

    const employee = await EmployeesRepository.findById(id);

    if (!employee) {
      return response.status(400).json({ error: 'Employee not found' });
    }

    response.json(employee);
  }

  delete() { }

  store() { }

  update() { }
}

module.exports = new EmployeeController();
