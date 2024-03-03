const {Task} = require('../models/task')
const httpStatus = require('http-status')
const {taskService} = require('../services/')

const taskController = {
   async taskList(req, res, next) {
	  try {
		 const filter = {}
		 const taskList = await Task.find(filter)
		 res.json(taskList.sort((x, y) => x.order - y.order))
	  } catch (error) {
		 next(error)
	  }

   },
   async findTaskByText(req, res, next) {
	  try {
		 const task = await taskService.findTaskId(req.body.task)
		 res.status(httpStatus.FOUND).send(task)
	  } catch (error) {
		 next(error)
	  }
   },
   async addTask(req, res, next) {
	  try {
		 const task = new Task({task: req.body.task.task, order: req.body.task.order})
		 await task.save()
		 const taskList = await Task.find({})
		 res.status(httpStatus.CREATED).send(taskList.sort((x, y) => x.order - y.order))
	  } catch (error) {
		 next(error)
	  }
   },
   async completeTask(req, res, next) {
	  try {
		 const task = await taskService.changeTaskStatusToComplete(req.body._id)
		 const taskList = await Task.find({})
		 res.status(httpStatus.OK).send(taskList)
	  } catch (error) {
		 next(error)
	  }
   },
   async flagTask(req, res, next) {
	  try {
		 const task = await taskService.changeTaskFlag(req.body._id)
		 const taskList = await Task.find({})
		 res.status(httpStatus.OK).send(taskList)
	  } catch (error) {
		 throw error
	  }

   },
   async removeTask(req, res, next) {
	  try {
		 const deletedTask = await Task.findByIdAndDelete(req.body._id)
		 if (!deletedTask) res.status(httpStatus.NOT_FOUND).send('Task not found')
		 const taskList = await Task.find({})
		 res.status(httpStatus.OK).send(taskList)
	  } catch (error) {
		 next(error)
	  }
   },
   async removeAllTasks(req, res, next) {
	  try {
		 await Task.deleteMany({})
		 const taskList = await Task.find({})
		 res.status(httpStatus.OK).send(taskList)
	  } catch (error) {
		 next(error)
	  }
   }
}


module.exports = taskController
