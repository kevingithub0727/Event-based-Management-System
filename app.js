const express = require('express');
const app = express();
const port = 8000
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const Todo = require('./models/todo');
const todoRoutes = require('./routes/todos')
// jose
//var fs = require('fs');
//var path = require('path');
//require('dotenv/config');
// Step 2 - connect to the database - jose
/* mongoose.connect("mongodb://localhost:3306/CS664_Photos",
	{ useNewUrlParser: true, useUnifiedTopology: true }, err => {
		console.log('connected')
	});
 */
// jose end 

const keys = require('./config/keys');  

mongoose.connect(keys.mongoURI, {useNewUrlParser: true})

console.log(keys.mongoURI);


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.set('view engine', 'ejs')
app.use( express.static(__dirname + '/public'))

app.get('/', (red,res)=>{
    res.render('index')
})
app.use('/todos', todoRoutes)

app.listen(port , ()=>{
    console.log('server has been started')
})