const express = require('express')
const router = express.Router()
const {getAllTasks,
    createTaks,
    getTasks,
    updateTask,
    deleteTasks} = require('../controllers/tasks')

router.route('/').get(getAllTasks)
router.route('/').post(createTaks)
router.route('/:id').get(getTasks)
router.route('/:id').patch(updateTask)
router.route('/:id').delete(deleteTasks)


module.exports = router
