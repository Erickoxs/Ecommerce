const express = require('express');
const router = express.Router();
const controladorCarrito = require('../controladores/controladorCarrito');


router.post('/crear', controladorCarrito.crearCarrito);
router.get('/:usuario_id', controladorCarrito.obtenerCarrito);
router.put('/actualizar', controladorCarrito.actualizarCarrito);
router.delete('/vaciar/:usuario_id', controladorCarrito.eliminarCarrito);

module.exports = router;
