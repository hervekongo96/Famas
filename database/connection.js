//const configToUse = require ('./config/keys');
const mongoose = require('mongoose');
const HOST = '0.0.0.0';

const URI = 'mongodb+srv://Masambukidi:*96herve*@cluster0.cnacw.mongodb.net/Famas?retryWrites=true&w=majorityy';
//const URI = 'mongodb://localhost:27017/Musiciendb?readPreference=primary&appname=MongoDB%20Compass&ssl=false';
const connectDB = async ()=>{
  await mongoose.connect(URI,
        {
            useNewUrlParser     : true,
            useUnifiedTopology  : true,
            useCreateIndex      : true,
        },
        (error)=>{
            if(error){
                console.log(`La connection à la base de données a échouée: ${error}`);
            }else{
              console.log(`La connection à la base de données a ressie`); 
            }
        }
    );
}

module.exports = connectDB;