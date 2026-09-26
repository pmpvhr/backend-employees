import { Request, Response } from 'express';
import { EmployeeController } from './employee.controller.js';
import { IEmployeeRepository } from '../repositories/employee.repository.interface.js';
describe('🧪 Unit Test: EmployeeController (Mantenibilidad & Testabilidad)', () => {
    let controller;
    let mockRepository;
    let mockRequest;
    let mockResponse;
    let statusMock;
    let jsonMock;
    beforeEach(() => {
        // 1. Crear un Mock 100% aislado de la interfaz (Cero dependencia de Mongoose)
        mockRepository = {
            findAll: jest.fn(),
            findById: jest.fn(),
            create: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
        };
        controller = new EmployeeController(mockRepository);
        // 2. Mockear los objetos del ciclo de vida de Express
        jsonMock = jest.fn();
        statusMock = jest.fn().mockReturnValue({ json: jsonMock });
        mockResponse = { status: statusMock };
    });
    it('Debería retornar un estado 200 y la lista de empleados de la abstracción', async () => {
        const fakeEmployees = [
            { nombre: 'Andrés Mendoza', cargo: 'Arquitecto', departamento: 'TI', sueldo: 4000 }
        ];
        // Configurar el comportamiento esperado de la abstracción
        mockRepository.findAll.mockResolvedValue(fakeEmployees);
        mockRequest = {};
        await controller.getEmployees(mockRequest, mockResponse);
        // Verificaciones asertivas del contrato
        expect(statusMock).toHaveBeenCalledWith(200);
        expect(jsonMock).toHaveBeenCalledWith(fakeEmployees);
        expect(mockRepository.findAll).toHaveBeenCalledTimes(1);
    });
});
//# sourceMappingURL=employee.controller.spec.js.map