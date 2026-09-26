import { Router } from 'express';
import { MongoEmployeeRepository } from '../repositories/mongo-employee.repository.js';
import { EmployeeController } from '../controllers/employee.controller.js';
const router = Router();
const employeeRepository = new MongoEmployeeRepository();
const employeeController = new EmployeeController(employeeRepository);
router.post('/employees', employeeController.createEmployee);
router.get('/employees', employeeController.getAllEmployees);
router.get('/employees/:id', employeeController.getEmployeeById);
router.put('/employees/:id', employeeController.updateEmployee);
router.delete('/employees/:id', employeeController.deleteEmployee);
export default router;
//# sourceMappingURL=employees.routes.js.map