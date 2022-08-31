const getAll = (req,res)=>{
    res.send('Get all tasks...');
};

const createTask = (req,res)=>{
    res.json(req.body);
};
const getTask = (req,res)=>{
    res.json(req.params);
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