const uploadFile = require('../models/uploadFile')

const asyncHandler = require('express-async-handler')

const getFiles = asyncHandler( async(req , res) => {
    const files = await uploadFile.find();
    res.status(200).json(files)
})



const setFiles = asyncHandler(async (req , res) => {

    
    if(!req.body.file){
        res.status(400)
        throw new Error('choose atleast one file')
    }

    const file = await uploadFile.create({
        file:  req.body.file
    })

    res.status(200).json(file)
})

const updateFiles = asyncHandler(async (req , res) => {

    const file = await uploadFile.findById(req.params.id)

    if(!file) {
        res.status(400)
        throw new Error('file not found')
    }
    
    const updatedFiles = await uploadFile.findByIdAndUpdate(req.params.id , req.body , {
        new: true,
    })
    res.status(200).json(updatedFiles)
})

const deleteFiles = asyncHandler(async (req , res) => {

    const file = await uploadFile.findById(req.params.id)

    if(!file) {
        res.status(400)
        throw new Error('file not found')
    }

    await uploadFile.remove()

    res.status(200).json({id: req.params.id})
})


module.exports = {
    getFiles,
    setFiles,
    updateFiles,
    deleteFiles
}