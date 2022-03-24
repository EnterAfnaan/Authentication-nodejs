const mongoose = require('mongoose')

const uploadFileSchema = mongoose.Schema({

    user : {
        type : mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    filename: {
        type: String,
        required: [true , 'upload a file']
    }
},
{
    timestamps:true
}
)

module.exports = mongoose.model('uploadFile' , uploadFileSchema )