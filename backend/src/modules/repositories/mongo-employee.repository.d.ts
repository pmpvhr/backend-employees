import type { IEmployeeRepository } from './employee.repository.interface.js';
export declare class MongoEmployeeRepository implements IEmployeeRepository {
    createEmployee(employeeData: any): Promise<any>;
    getAllEmployees(): Promise<any[]>;
    getEmployeeById(employeeId: string): Promise<any>;
    updateEmployee(employeeId: string, employeeData: any): Promise<any>;
    deleteEmployee(id: string): Promise<boolean>;
}
//# sourceMappingURL=mongo-employee.repository.d.ts.map