const { Router } = require('express');

// Importar rutas
const mainRoute = require('./controllers/mainRoute.js');

const router = Router();

// Rutas
router.use('/', mainRoute);

// Exportar rutas
module.exports = router;
