import {} from '../repositories/employee.repository.interface';
export class EmployeeController {
    employeeRepository;
    // Inyección de la abstracción (Inversión de Dependencias)
    constructor(employeeRepository) {
        this.employeeRepository = employeeRepository;
    }
    getAllEmployees = async (req, res) => {
        try {
            const data = await this.employeeRepository.getAllEmployees();
            res.status(200).json(data);
        }
        catch (error) {
            res.status(500).send(error.message);
        }
    };
    createEmployee = async (req, res) => {
        try {
            const saved = await this.employeeRepository.createEmployee(req.body);
            res.status(201).json(saved);
        }
        catch (error) {
            res.status(500).send(error.message);
        }
    };
    getEmployeeById = async (req, res) => {
        try {
            const id = req.params.id;
            if (typeof id !== 'string') {
                res.status(400).send('Invalid employee ID');
                return;
            }
            const employee = await this.employeeRepository.getEmployeeById(id);
            if (employee) {
                res.status(200).json(employee);
            }
            else {
                res.status(404).send('Employee not found');
            }
        }
        catch (error) {
            res.status(500).send(error.message);
        }
    };
    updateEmployee = async (req, res) => {
        try {
            const id = req.params.id;
            if (typeof id !== 'string') {
                res.status(400).send('Invalid employee ID');
                return;
            }
            const updated = await this.employeeRepository.updateEmployee(id, req.body);
            if (updated) {
                res.status(200).json(updated);
            }
            else {
                res.status(404).send('Employee not found');
            }
        }
        catch (error) {
            res.status(500).send(error.message);
        }
    };
    deleteEmployee = async (req, res) => {
        try {
            const id = req.params.id;
            if (typeof id !== 'string') {
                res.status(400).send('Invalid employee ID');
                return;
            }
            const deleted = await this.employeeRepository.deleteEmployee(id);
            if (deleted) {
                res.status(200).send('Employee deleted successfully');
            }
            else {
                res.status(404).send('Employee not found');
            }
        }
        catch (error) {
            res.status(500).send(error.message);
        }
    };
}
//# sourceMappingURL=employee.controller.js.map