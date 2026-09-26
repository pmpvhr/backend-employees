// The model is currently implemented in JavaScript without a declaration file.
// @ts-expect-error TS7016: no declaration file is available for this module.
import { EmployeeModel } from '../models/employee.model.js';
export class MongoEmployeeRepository {
    async createEmployee(employeeData) {
        const newEmployee = new EmployeeModel(employeeData);
        return await newEmployee.save();
    }
    async getAllEmployees() {
        return await EmployeeModel.find();
    }
    async getEmployeeById(employeeId) {
        return await EmployeeModel.findById(employeeId);
    }
    async updateEmployee(employeeId, employeeData) {
        return await EmployeeModel.findByIdAndUpdate(employeeId, employeeData, { new: true });
    }
    async deleteEmployee(id) {
        const result = await EmployeeModel.findByIdAndDelete(id);
        return result !== null;
    }
}
//# sourceMappingURL=mongo-employee.repository.js.map