const fs = require('fs')

const uploadFile = require('../models/uploadFile')
const User = require('../models/userModel')


const asyncHandler = require('express-async-handler')


const getFiles = asyncHandler( async(req , res) => {
    const files = await uploadFile.find({user: req.user.id});
    res.status(200).json(files)
})



const setFiles = asyncHandler(async (req , res) => {


    const { file , filename} = req.body

    // fs.writeFile('test.csv' , file , (err) => {
    //     if(err) throw err;
    // } )


    
    if(!filename){
        res.status(400)
        throw new Error('choose atleast one file')
    }

    const files = await uploadFile.create({
        filename:  req.body.filename,
        user: req.user.id
    })

    res.status(200).json(files)
})

const updateFiles = asyncHandler(async (req , res) => {

    const file = await uploadFile.findById(req.params.id)

    if(!file) {
        res.status(400)
        throw new Error('file not found')
    }

    const user = await User.findById(req.user.id)

    if(!user) {
        res.status(401)
        throw new Error('User not found')
    }

    if(uploadFile.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not Authorized')
    }
    
    const updatedFiles = await uploadFile.findByIdAndUpdate(req.params.id , req.body , {
        new: true,
    })
    res.status(200).json(updatedFiles)
})

const deleteFiles = asyncHandler(async (req , res) => {


    let file = await uploadFile.findById(req.params.id)

    if(!file) {
        res.status(400)
        throw new Error('file not found')
    }

    
    const user = await User.findById(req.user.id)
    console.log(uploadFile.user)

    if(!user) {
        res.status(401)
        throw new Error('User not found')
    }

    if(uploadFile.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not Authorized')
    }

    await uploadFile.deleteOne({filename: file.filename})

    res.status(200).json(file.filename)
})


module.exports = {
    getFiles,
    setFiles,
    updateFiles,
    deleteFiles
}