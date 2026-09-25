import type { IEmployeeRepository } from './employee.repository.interface.js';
// The model is currently implemented in JavaScript without a declaration file.
// @ts-expect-error TS7016: no declaration file is available for this module.
import { EmployeeModel } from '../models/employee.model.js';


export class MongoEmployeeRepository implements IEmployeeRepository {
  
    async createEmployee(employeeData: any): Promise<any> {
    const newEmployee = new EmployeeModel(employeeData);
    return await newEmployee.save();
    }
    
    async getAllEmployees(): Promise<any[]> {
      return await EmployeeModel.find();
    }
    
    async getEmployeeById(employeeId: string): Promise<any> {
      return await EmployeeModel.findById(employeeId);
    }
    async updateEmployee(employeeId: string, employeeData: any): Promise<any> {
      return await EmployeeModel.findByIdAndUpdate(employeeId, employeeData, { new: true });
    }

     async deleteEmployee(id: string): Promise<boolean> {
    const result = await EmployeeModel.findByIdAndDelete(id);
    return result !== null;
    }
  }
