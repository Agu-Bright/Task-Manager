const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Must Provide Name'],
        trim: true,
        maxLength: [20, 'Name cannot be more than 20']
    },
    completed: {
        type: Boolean,
        default: false
    }
})



module.exports = mongoose.model('Task', TaskSchema)
