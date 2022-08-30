const router = require('express').Router();
const { getAll, createTask, getTask, updateTask,deleteTask } = require('../controllers/tasks');

router.route('/').get(getAll);


module.exports = router;