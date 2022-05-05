const express = require('express');
const app = express();
const port = 8000
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const Todo = require('./models/todo');
const todoRoutes = require('./routes/todos')

const keys = require('./config/keys');  
const Photo = require('./models/photo');
const photoRoutes = require('./routes/photos'); 

mongoose.connect(keys.mongoURI, {useNewUrlParser: true})

console.log(keys.mongoURI);

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.set('view engine', 'ejs')
app.use( express.static(__dirname + '/public'))

app.get('/', (red,res)=>{
    res.render('index')
})
app.use('/photos', photoRoutes)

app.listen(port , ()=>{
    console.log('server has been started')
})