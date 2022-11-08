const {Task} = require('../models/task')

const findTaskId = async (task) => {
   return Task.findOne({task: task});
}

const changeTaskFlag = async (id) => {
   try {
	  const task = await Task.findById(id)
	  if (!task.flag) return Task.findByIdAndUpdate({_id: id}, {"$set": {flag: true}}, {new: true})
	  else return Task.findByIdAndUpdate({_id: id}, {"$set": {flag: false}}, {new: true})
   } catch (error) {
	  throw error
   }
}

const changeTaskStatusToComplete = async (id) => {
   try {
	  const task = await Task.findById(id)
	  if (!task.status) return Task.findByIdAndUpdate({_id: id}, {"$set": {status: true, flag: false}}, {new: true})
	  else return Task.findByIdAndUpdate({_id: id}, {"$set": {status: false}}, {new: true})
   } catch (error) {
	  throw error
   }
}

module.exports = {findTaskId, changeTaskStatusToComplete, changeTaskFlag}
