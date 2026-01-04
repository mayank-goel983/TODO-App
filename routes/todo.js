const express = require('express');
const {handleGetToDoList, handleInsertToDo, handleUpdateToDo, handleDeleteToDo} = require('../controllers/todo')

const route = express.Router();

route.get('/', handleGetToDoList);

route.post('/', handleInsertToDo);

route.route('/:id')
.put(handleUpdateToDo)
.delete(handleDeleteToDo);

module.exports = route;