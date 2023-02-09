const express = require("express");
const path = require("path");
const rootDir = require("../util/path");

const router = express.Router();

router.get('/', (req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','landingPage.html'));
})

router.get('/users', (req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','userList.html'));
})

router.post('/add-user',(req,res,next)=>{
    res.redirect(302,'/');
})

module.exports = router;