const mongoose  = require('mongoose');
const Musicien = require('../models/musicien');

//envoi du fomulaire
exports.soumettre = (req, res) =>{
    
    const identite = {nom,postnom,prenom,adresse,telephone,email,nationalite,lieudenaissance,datenaissance,sexe,nominst,numinst,paroisse,province,ville} = req.body;
    
    if(!nom || !postnom|| !prenom|| !adresse|| !telephone|| !nationalite|| !lieudenaissance || !datenaissance || !sexe || !nominst || !paroisse || !province ){
        return res.status(400).render('enregistrement', {
            message: "remplir les autres champs s'il vous plait!"
        });
    }
    else{

        insertRecord(req, res);  
       
    }
    
    function insertRecord(req, res){
        
        const newMusicien = new Musicien({
          nom,
          postnom,
          prenom, 
          adresse,
          telephone,
          email,
          nationalite,
          lieudenaissance,
          datenaissance,
          nominst,
          numinst,
          paroisse,
          province,
          ville,
        });
        newMusicien.save((err, doc)=>{
            if(!err){
                res.redirect('/affiche');
            }
            else{
               console.log("erreur d'insertion:" +err);
               
            }
        });
        console.log(identite);
    }
}