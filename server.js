const express = require('express')
const app = express();// importing express and its asssigning into a variable 
const http = require ('http') // importing http to project
const path = require('path')
const PORT = process.env.PORT || 4000 // port declaration 
const session = require("express-session") //adding session module
const nocache = require("nocache") //adding nocache module
const userRouter =  require('./Router/user');
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(nocache())

app.use(
    session({
        secret: "mydob@1234321",
        resave: false,
        saveUninitialized: true,
    })
    );
    app.set('view engine','ejs')// creating and running server 
    app.set('views', path.join(__dirname, 'views'));// using for setting path 
    app.set('public', path.join(__dirname, 'public'));// 
    app.use(express.static("public"))//this a middleware // using to convert public files to static 
    app.use("/",userRouter)
    
    // home Routing 
    

app.listen(PORT);
