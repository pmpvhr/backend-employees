import express from 'express';


const app = express();
app.use(express.json());


//settings
app.set('puerto',process.env.PORT|| 3000);
app.set('nombreApp','Gestión de empleados');


module.exports=app;