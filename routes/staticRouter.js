const express = require('express');
const TODO = require('../models/todo')

const staticRoute = express.Router();

staticRoute.get("/", async (req, res) =>{
    const allToDOList = await TODO.find({});
    return res.render('home', {
        todoList: allToDOList
    })
})

module.exports = staticRoute;