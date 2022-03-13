const mongoose = require('mongoose')

const uploadFileSchema = mongoose.Schema({
    file: {
        type: String,
        required: [true , 'upload a file']
    }
},
{
    timestamps:true
}
)

module.exports = mongoose.model('uploadFile' , uploadFileSchema )