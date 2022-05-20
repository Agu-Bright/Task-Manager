
const asyncWrapper = require('../middleware/async')

const Task = require('../modules/task')


const getAllTasks = asyncWrapper(async (req, res)=>{
    const tasks = await Task.find({})
    res.status(200).json({tasks})
})


// async (req, res)=>{
//     try{
//         const task = await Task.find({});
//         res.status(200).json({task})
//     }catch(error){
//         res.status(500).json({msg: error})
//     }
// }


const createTaks = async (req, res)=>{
    

    try{
        const task = await Task.create(req.body)
        res.status(201).json({task})
    }catch (error){
        res.status(500).json({msg: error})
    }
}

const getTasks = async (req, res)=>{
    try {
        const {id: taskId} = req.params
        const task = await Task.findOne({_id: taskId})
        if(!task){
            const error = new Error('Not Found')
            error.status = 404;
            return res.status(404).json({msg: `No task with ${taskId} found`})
        }
        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({msg: error})
    } 
}


const deleteTasks = async (req, res)=>{
    try {
        const taskId = req.params.id;
        const task = await Task.findOneAndDelete({_id: taskId})
        if(!task){
            return res.status(404).json({msg: `no task with ${taskId} found`})
        }
        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({msg: error})
    }
}

const updateTask = async (req, res)=>{
    try {
        const taskId = req.params.id
        const task = await Task.findOneAndUpdate({_id: taskId}, req.body,{
            new: true,
            runvalidators: true
        })
        if(!task){
            return res.status(404).json({msg: `no task with ${id} found`})
        }
        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({msg: error})
    }
}




module.exports = {
    getAllTasks,
    createTaks,
    getTasks,
    updateTask,
    deleteTasks
}