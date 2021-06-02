const express = require("express");
const path = require('path');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const bodyparser = require('body-parser');
const configToUse = require ('./config/keys');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 4000;
const HOST = '0.0.0.0'; 

mongoose.connect(
    configToUse.dbURL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex : true,
    },
    (error) => {
      if (!error) {
        console.log(`La connection à la base des données a reussie`);
      } else {
        console.log(`La connection à la base des données a échouée: ${error}`);
      }
    }
  );

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


app.listen(PORT, HOST, ()=>{
    console.log(`serveur allumer au port ${PORT}`);
})