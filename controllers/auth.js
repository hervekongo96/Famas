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

        if (musicien.datenaissance == musicien.datenaissance && musicien.telephone == musicien.telephone ) {

			Musicien.findOne({datenaissance:musicien.datenaissance},function(err,data){
				if(!data){
					var c;
					Musicien.findOne({},function(err,data){

						if (data) {
							console.log("if");
							c = data.unique_id + 1;
						}else{
							c=1;
						}

						const newMusicien = new Musicien({nom,postnom,prenom,adresse,telephone,email,nationalite,lieudenaissance,datenaissance,nominst,numinst,paroisse,province,ville});

						newMusicien.save(function(err, musiciens){
							if(err)
								console.log(err);
							else
								console.log('Success'); 
						});

					}).sort({_id: -1}).limit(1);
					res.redirect('/affiche');
				}else{
					//.send({"Success":"Email is already used."});
                    return res.status(400).render('enregistrement', {
                        message: "vous étiez déjà enregistrer! Ndeko o mikomisaki déjà"
                    });
				}

			});
		}       
    } 

}

