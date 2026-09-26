module.exports = {
  apps : [{
    name: "backend-mean-employee",
    script: "./index.ts",
    instances: "max",       // Modo Cluster: usa todos los núcleos de la CPU
    exec_mode: "cluster",

    // Producción: Variables de entorno protegidas
    env: {
      NODE_ENV: "production",
      PORT: 3000,
      DB_HOST: "://amazonaws.com",
      DB_USER: "db_admin",
      DB_PASS: "password_seguro_de_base_de_datos"
    },
    // Logs y Monitoreo del Servidor
    error_file: "/var/www/backend-employees/backend/logs/err.log",
    out_file: "/var/www/backend-employees/backend/logs/out.log",
    log_date_format: "YYYY-MM-DD HH:mm:ss Z",
    merge_logs: true
  }],

  // Automatización del Despliegue desde tu PC local
  deploy : {
    production : {
      user : 'ubuntu',
      host : '100.50.83.159',
      ref  : 'origin/main',
      repo : 'git@github.com:pmpvhr/backend-employees.git',
      path : '/var/www/employees/backend-employees',
      'post-deploy' : 'mkdir -p logs && npm install && pm2 reload ecosystem.config.js --env production && pm2 save',
      ssh_options: "IdentityFile=C:\Users\USUARIO\.ssh\aws.pem" // Ruta a tu llave .pem local
      
    }
  }
};