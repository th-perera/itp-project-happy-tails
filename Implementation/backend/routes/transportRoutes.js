const express = require('express')
const router = express.Router()
const {
    readTransport,
    addTransport,
    updateTransport,
    deleteTransport,
} = require('../controller/transportController')
const { protect , userProtect , adminProtect} = require('../middleware/authMiddleware')

router.post('/', addTransport)
router.get('/', readTransport )
router.put('/:id' , updateTransport)
router.delete('/:id', deleteTransport )


module.exports = router