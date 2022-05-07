
const express = require('express');
const router = express.Router()
const Photo = require('../models/photo')

//get all photos
router.post('/imageTitle', async (req, res)=>{
    console.log(req);
    const photos = await Photo.find(
        { "imageTitle": { "$regex": req.body.inputField, "$options": "i"} } 
    );
    res.json(photos)
})

router.post('/imageName', async (req, res)=>{
    console.log(req);
    const photos = await Photo.find(
        { "imageName": { "$regex": req.body.inputField, "$options": "si"} } 
    );
    res.json(photos)
})

router.post('/month', async (req, res)=>{
    console.log(req);
    const photos = await Photo.find(
        { "month": { "$regex": req.body.inputField2, "$options": "si" } } 
    );
    res.json(photos)
})

module.exports = router