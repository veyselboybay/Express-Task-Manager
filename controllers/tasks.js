const Task = require('../models/task');

const getAll = async (req,res)=>{
    try {
        res.status(200).json(await Task.find());
    } catch (error) {
        res.status(500).json({msg:error});
    }
};

const createTask = async (req,res)=>{
    try {
        const task = await Task.create(req.body);
        res.status(201).json({task});
    } catch (error) {
        res.status(500).json({msg:error.errors.name.message});
    }
};
const getTask = async (req,res)=>{
    const id= req.params.id;
    try {
        const task = await Task.findOne({_id:id});
        if(!task){
            return res.status(404).json('No Task with id:'+id);
        }
        return res.status(200).json({task});
        
    } catch (error) {
        return res.status(500).json(error.message);
    }
};
const updateTask = async (req,res)=>{
    const id = req.params.id;
    const newName = req.body.newName;
    try {
        const task = await Task.updateOne({_id:id},{name:newName},{useFindAndModify:false, new: true, runValidators:true});
        if(!task){
            return res.status(404).json('No Task with id:'+id);
        }
        return res.status(200).json({task});
    } catch (error) {
        return res.status(500).json({msg:error.message});
    }
};
const deleteTask = async (req,res)=>{
    const {id} = req.params;
    try {
        const isDeletedTask = await Task.findOneAndDelete({_id:id});
        if(!isDeletedTask){
            res.status(404).json('No Task with id:'+id);
        }
        return res.status(200).json({isDeletedTask});
    } catch (error) {
        return res.status(500).json({msg:error.message});
    }
};

module.exports = { 
    getAll,
    createTask,
    getTask,
    updateTask,
    deleteTask,
};