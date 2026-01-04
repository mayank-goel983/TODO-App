const express = require('express');
const methodOverride = require('method-override')
const path = require('path')
const {connectMongoDb} = require('./connection')
const route = require('./routes/todo')
const staticRoute = require('./routes/staticRouter')

const app = express();
const PORT = 8002;

connectMongoDb("mongodb+srv://todoapp:todoapp@cluster0.vfkzrv8.mongodb.net/todoApp")
//connectMongoDb("mongodb://localhost:27017/todoApp")
.then(console.log("MongoDb Connected"))

app.set("view engine", "ejs");
app.set('views', path.resolve('./views'))

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));

app.use('/', staticRoute);
app.use('/todo', route);

app.listen(PORT, ()=> console.log(`Server started at ${PORT}`));