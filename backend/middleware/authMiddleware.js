const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')

const User = require('../models/userModel')

const protected = asyncHandler( async (req , res , next) => {

    let token

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {

            token = req.headers.authorization.split(' ')[1]

            const decode = jwt.verify(token , process.env.SECRET_KEY)

            req.user = await User.findById(decode.id).select('-password')

            next()
            
        } catch (error) {
            console.log(error)
            res.status(401)
            throw new Error('Not Authorizerd')
        }
    }

    if(!token) {
        res.status(401)
        throw new Error('token does not exist')
    }
})

module.exports = {protected}