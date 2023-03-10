const express = require('express');
const bodyParser = require("body-parser")
const path = require("path");
const router = require('./routes/route');

const app = express();

app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'public')))
app.use(router)
app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})

app.listen(3000,()=>{
    console.log("Server is listening on PORT 3000");
})