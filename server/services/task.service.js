const {Task} = require('../models/task')

const findTaskId = async (task) => {
   return Task.findOne({task: task});
}

const changeTaskStatusToComplete = async (id) => {
   try {
	  const task = await Task.findById(id)
	  if (!task.status) return Task.findByIdAndUpdate({_id: id}, {"$set": {status: true}}, {new: true})
	  else return Task.findByIdAndUpdate({_id: id}, {"$set": {status: false}}, {new: true})
   } catch (error) {
	  throw error
   }
}

module.exports = {findTaskId, changeTaskStatusToComplete}
