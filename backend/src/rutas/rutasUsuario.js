const express = require('express');
const router = express.Router();
const controladorUsuario = require('../controladores/controladorUsuario');
const middlewareAutenticacion = require('../middleware/middlewareAutenticacion');

// Rutas para el CRUD de usuarios
router.post('/registro', controladorUsuario.registrarUsuario); 
router.post('/iniciarSesion', controladorUsuario.iniciarSesion); 
router.get('/perfil', middlewareAutenticacion, controladorUsuario.obtenerPerfilUsuario);
router.put('/perfil', middlewareAutenticacion, controladorUsuario.actualizarPerfilUsuario); 

module.exports = router;
