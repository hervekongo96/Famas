const express = require("express");
const path = require('path');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const bodyparser = require('body-parser');
const connectDB = require('./database/connection');

const app = express()


//moteur de templete
app.set('view engine', 'hbs')
const public = path.join(__dirname, './public');
app.use(express.static(public));

//parse url-encode bodies(as sent by HTML forms)
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cookieParser());
app.use(bodyparser.json());

// les routes
app.use('/', require('./routes/pages'));
app.use('/auth', require('./routes/auth'));

connectDB();

const PORT = process.env.PORT || 4000;
app.listen(PORT, ()=>{
    console.log(`serveur allumer au port ${PORT}`);
})