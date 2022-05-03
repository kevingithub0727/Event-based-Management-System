const express = require('express');
const router = express.Router()
const Todo = require('../models/todo')

//get all todos
router.get('/api', async (req, res)=>{
    const todos = await Todo.find()
    res.json(todos)
})

router.post('/api', async (req, res)=>{
    const { text } = req.body;

    const todo = new Todo({
        text
    })
    try {
       // await todo.save();
       await todo.save(function(err){
        if(err){
             console.log(err);
             return;
        }});
        res.json(todo)
    }
     catch (err) {
        res.json(400, err)
     }  
})

router.put('/api/:id', async (req, res)=> {
    const todo = await Todo.findById(req.params.id);
    for(let key in req.body) {
        if(todo[key] != req.body[key]){
            todo[key] = req.body[key]
        }
    }
    try {
        await todo.save();
        res.json(todo)
    } catch (err) {
        res.json(400, err)
    }
})

router.delete('/api/:id', async (req, res)=> {
    const todo = await Todo.findById(req.params.id);
    try{
        await todo.remove();
        res.json({message: 'Todo has been removed successfully'})
    } catch (err) {
        res.json(400, err)
    }
})

module.exports = router