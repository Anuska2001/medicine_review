const express = require('express');
var router = express.Router();

var ObjectId = require('mongoose').Types.ObjectId;

var {Medicine} = require('../models/medicine.js')

router.get('/',(req,res)=>{
    Medicine.find((err,docs)=>{
        if(!err){
            res.send(docs);
        }
        else{
            console.log('error' + JSON.stringify(err,undefined,2));
        }
    });
});

router.get('/:id', (req,res)=>{
    if(!ObjectId.isValid(req.params.id)){
        return res.status(400).send('No Records with is: ${req.params.id}');
    }
    Medicine.findById(req.params.id, (err,doc)=>{
        if(!err){res.send(doc);}
        else {console.log('Error'+ JSON.stringify(err,undefined,2));}
    })
})

router.post('/', (req,res)=>{
    var med = new Medicine({
        Mname: req.body.Mname,
        Rname: req.body.Rname,
        review: req.body.review
    })
    med.save((err,doc)=>{
        if(!err){
            res.send(doc)
        }
        else{
            console.log('error' + JSON.stringify(err,undefined,2));  
        }
    })
})

router.put('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id)){
        return res.status(400).send('No Records with is: ${req.params.id}');
    }
    var med = new Medicine({
        Mname: req.body.Mname,
        Rname: req.body.Rname,
        review: req.body.review
    })
})



module.exports = router;