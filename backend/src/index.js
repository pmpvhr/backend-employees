import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { connectDatabase } from './config/database.js';
import employeeRoutes from './modules/routes/employees.routes.js';
const app = express();
const port = 3000;
connectDatabase(); // Conexión a la base de datos
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
// REGISTRO DE RUTAS MODULARES INDEPENDIENTES
// Esto mapea la raíz del archivo independiente a: http://localhost:3000/api/v1/employees
app.use('/api/v1', employeeRoutes);
app.use((req, res, next) => {
    res.setHeader("Content-Security-Policy", "default-src 'self'; connect-src 'self' http://localhost:3000 http://localhost:4200;");
    next();
});
app.listen(port, () => {
    console.log('Servidor escuchando en el puerto ' + port);
});
//# sourceMappingURL=index.js.map