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

  async delete(request, response) {
    const { id } = request.params;

    if (!isValidUUID(id)) {
      return response.status(400).json({ error: 'Invalid employee id' });
    }

    await EmployeesRepository.delete(id);

    response.sendStatus(204);
  }

  async store(request, response) {
    const {
      ename, esurname, eemail,
    } = request.body;

    if (!ename) {
      return response.status(400).json({ error: 'Name is required' });
    }

    if (!esurname) {
      return response.status(400).json({ error: 'Surname is required' });
    }

    if (!eemail) {
      return response.status(400).json({ error: 'Email is required' });
    }

    if (eemail) {
      const employeeExists = await EmployeesRepository.findByEmail(eemail);

      if (employeeExists) {
        return response.status(400).json({ error: 'This email already belongs to an employee' });
      }
    }

    const employee = await EmployeesRepository.create({
      ename,
      esurname,
      eemail,
    });

    return response.status(201).json(employee);
  }

  async update(request, response) {
    const { id } = request.params;
    const {
      ename, esurname, eemail,
    } = request.body;

    if (!isValidUUID(id)) {
      return response.status(400).json({ error: 'Invalid employee id ' });
    }

    if (!ename) {
      return response.status(400).json({ error: 'Name is required' });
    }

    const employee = await EmployeesRepository.update(id, {
      ename,
      esurname,
      eemail,
    });

    response.json(employee);
  }
}

module.exports = new EmployeeController();
