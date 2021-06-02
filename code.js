const mongoose  = require('mongoose');
const Musicien = require('../models/musicien');

//envoi du fomulaire
exports.soumettre = async (req, res) =>{
    
    const musicien = {nom,postnom,prenom,adresse,telephone,email,nationalite,lieudenaissance,datenaissance,sexe,nominst,numinst,paroisse,province,ville} = req.body;
    
    if(!nom || !postnom|| !prenom|| !adresse|| !telephone|| !nationalite|| !lieudenaissance || !datenaissance || !sexe || !nominst || !paroisse || !province ){
        return res.status(400).render('enregistrement', {
            message: "remplir les autres champs s'il vous plait!"
        });
    }
    else{

        await insertRecord(req, res);  
       
    }
    
    function insertRecord(req, res){
        
        const newMusicien = new Musicien({nom,postnom,prenom,adresse,telephone,email,nationalite,lieudenaissance,datenaissance,nominst,numinst,paroisse,province,ville});
        newMusicien.save()
        .then(data=>{
            if(data.lenght > 0){
                response.json({
                    message: "Sauvegarde non réussi! La personne est enregistrée dans la base de données",
                    data: data
                })           
            }else{
                res.redirect('/affiche');
            }
        })
        .catch(error =>{ 
            res.status(500).send({
                message: error.message || "Une erreur s'est produite lors du sauvegarde"
            })  
        })
    } 
}

