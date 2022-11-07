const express = require('express')
const router = express.Router()
const taskController = require('../controllers/task.controller')


router.get('/tasks', taskController.taskList)
router.get('/find', taskController.findTaskByText)
router.post('/add', taskController.addTask)
router.patch('/complete', taskController.completeTask)
router.patch('/flag', taskController.flagTask)
router.delete('/remove', taskController.removeTask)
router.delete('/removeall', taskController.removeAllTasks)


module.exports = router
