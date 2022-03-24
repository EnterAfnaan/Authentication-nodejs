const express = require('express')

const { getFiles, setFiles, updateFiles, deleteFiles} = require('../controllers/uploadFilesController')
const {protected} = require('../middleware/authMiddleware')


const router = express.Router()

router.get('/',protected, getFiles)

router.post('/',protected,setFiles)

router.put('/:id', protected,updateFiles)

router.delete('/:id', protected, deleteFiles)

module.exports = router