const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let MusicienSchema = new Schema({
    unique_id: {
    type : Number,
    required : false
    },
    nom : {
        type: String,
        required : true
    },
    postnom : {
        type: String,
        required : true
    },
    prenom : {
        type: String,
        required : true
    },
    adresse : {
        type: String,
        required : true
    },
    telephone : {
        type: String,
        required : true
    },
    email : {
        type: String,
        required : false
    },
    nationalite : {
        type: String,
        required : true
    },
    lieudenaissance : {
        type: String,
        required : true
    },
    datenaissance : {
        type: String,
        required : true
    },
    nominst : {
        type: String,
        required : true
    },
    numinst : {
        type: String,
        required : true
    },
    paroisse : {
        type: String,
        required : true
    },
    province : {
        type: String,
        required : true
    },
    ville : {
        type: String,
        required : true
    }

});

const Musicien = module.exports = mongoose.model('Musicien', MusicienSchema);
 