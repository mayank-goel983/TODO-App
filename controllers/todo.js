const TODO = require('../models/todo');
const shortid = require('shortid');

async function handleGetToDoList(req, res)
{
    const allToDOList = await TODO.find({});
    return res.json(allToDOList);
}

async function handleInsertToDo(req, res)
{
    const body = req.body;
    if(!body.description)
    {
        const allToDOList = await TODO.find({});
        return res.render('home', {descValidation: true, todoList: allToDOList});
    }

    const result = await TODO.create({
       description: body.description,
       createdAt: Date.now()
    });

    return res.redirect('/');
}

async function handleUpdateToDo(req, res)
{
    const body = req.body;
    if(!body.description)
        return res.status(400).json({error: "Please enter description"});

    const result = await TODO.findByIdAndUpdate(req.params.id, {description: body.description});
    
    return res.redirect('/');
}

async function handleDeleteToDo(req, res)
{
    const result = await TODO.findByIdAndDelete(req.params.id);
    
    const allToDOList = await TODO.find({});

    return res.redirect('/');
}

module.exports = {
    handleGetToDoList,
    handleInsertToDo,
    handleUpdateToDo,
    handleDeleteToDo,
}