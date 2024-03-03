const mongoose = require('mongoose')


const taskSchema = mongoose.Schema({
   task: {
	  type: String,
	  required: true,
	  minLength: 1,
	  trim: true
   },
   flag: {
	  type: Boolean,
	  default: false
   },
   status: {
	  type: Boolean,
	  default: false
   },
   date: {
	  type: Date,
	  default: Date.now
   },
   order: {
	  type: String,
	  default: 1,
	  unique: true
   }
})

const Task = mongoose.model('Task', taskSchema)
module.exports = {Task}
