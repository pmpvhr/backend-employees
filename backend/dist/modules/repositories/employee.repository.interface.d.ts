export interface IEmployeeRepository {
    getAllEmployees(): Promise<any[]>;
    getEmployeeById(id: string): Promise<any | null>;
    createEmployee(employeeData: any): Promise<any>;
    updateEmployee(id: string, employeeData: any): Promise<any | null>;
    deleteEmployee(id: string): Promise<boolean>;
}
//# sourceMappingURL=employee.repository.interface.d.ts.map