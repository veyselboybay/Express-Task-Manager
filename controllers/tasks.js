const getAll = (req,res)=>{
    res.send('Get all tasks...');
};

const createTask = (req,res)=>{
    res.send('Create task...');
};
const getTask = (req,res)=>{
    res.send('Get single task...');
};
const updateTask = (req,res)=>{
    res.send('Update task...');
};
const deleteTask = (req,res)=>{
    res.send('delete task...');
};

module.exports = { 
    getAll,
    createTask,
    getTask,
    updateTask,
    deleteTask,
};