const {Task} = require('../models/task')

const findTaskId = async (task) => {
   return Task.findOne({task: task});
}

const changeTaskStatusToComplete = async (id) => {
   try {
	  return Task.findByIdAndUpdate({_id: id}, {"$set": {status: true}}, {new: true})
   } catch (error) {
	  throw error
   }
}

module.exports = {findTaskId, changeTaskStatusToComplete}
