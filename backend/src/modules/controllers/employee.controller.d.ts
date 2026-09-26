import type { Request, Response } from 'express';
import { type IEmployeeRepository } from '../repositories/employee.repository.interface.js';
export declare class EmployeeController {
    private employeeRepository;
    constructor(employeeRepository: IEmployeeRepository);
    getAllEmployees: (req: Request, res: Response) => Promise<void>;
    createEmployee: (req: Request, res: Response) => Promise<void>;
    getEmployeeById: (req: Request, res: Response) => Promise<void>;
    updateEmployee: (req: Request, res: Response) => Promise<void>;
    deleteEmployee: (req: Request, res: Response) => Promise<void>;
}
//# sourceMappingURL=employee.controller.d.ts.map