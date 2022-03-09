const express = require('express')

const { getFiles, setFiles, updateFiles, deleteFiles} = require('../controllers/uploadFilesController')

const router = express.Router()

router.get('/', getFiles)

router.post('/',setFiles)

router.put('/:id', updateFiles)

router.delete('/:id', deleteFiles)

module.exports = router