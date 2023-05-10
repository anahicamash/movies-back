const mongoose = require('mongoose')

const movieSchema = mongoose.Schema({
    title:{
        type: String,
        required: [true,'Add movie']
    }
},{
    timestamps: true

})
module.exports = mongoose.model('Movie', movieSchema)