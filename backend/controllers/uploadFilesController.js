const asyncHandler = require('express-async-handler')

const getFiles = asyncHandler( async(req , res) => {
    res.status(200).json({response: 'get all files'})
})

const setFiles = asyncHandler(async (req , res) => {
    if(!req.body.rid){
        res.status(400)
        throw new Error('choose atleast one file')
    }
    res.status(200).json({response: 'set files'})
})

const updateFiles = asyncHandler(async (req , res) => {
    res.status(200).json({response: `update file with id ${req.params.id}`})
})

const deleteFiles = asyncHandler(async (req , res) => {
    res.status(200).json({response: `update file with id ${req.params.id}`})
})


module.exports = {
    getFiles,
    setFiles,
    updateFiles,
    deleteFiles
}