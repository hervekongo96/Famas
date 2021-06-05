var express = require('express');
var router = express.Router();
const Musicien = require('../models/musicien');


router.get('/registrer', (req, res)=>{
    res.render('registrer');
}); 

router.get('/login', (req, res)=>{
    res.render('login');
});

router.get('/famas', (req, res)=>{
    res.render('enregistrement')
});

router.get('/contact', (req, res)=>{
    res.render('contact');
});

router.get('/affiche', (req, res)=>{
    res.render('affiche')
});

router.get('/acceuil', (req, res)=>{
    res.render('acceuil')
});
router.get('/presentation', (req, res)=>{
    res.render('presentation')
});

    router.get('/liste', async(req, res) => {
        console.log("Get all Musiciens", req.params);
        await Musicien.find()
        .then((data) => {
            if(data) {
                console.log(data);
                //response.status(200).json(data)
                res.render('list',{
                    musicien : data
                } );
            }
        })
        .catch((error) => {
            response.status(500).json({
                message: error.message || "Une erreur est survenue lors de la demande."
            })
        })
    })
    


module.exports = router;

