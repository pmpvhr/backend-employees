import { Schema, model } from 'mongoose';

const EmployeeSchema = new Schema({
  nombre: { type: String, required: true },
  cargo: { type: String, required: true },
  departamento: { type: String, required: true },
  sueldo: { type: Number, required: true }
}, { timestamps: true });

export const EmployeeModel = model('Employee', EmployeeSchema);