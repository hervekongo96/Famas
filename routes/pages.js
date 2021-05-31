var express = require('express');
var router = express.Router();


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

module.exports = router;

