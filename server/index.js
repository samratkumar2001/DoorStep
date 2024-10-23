const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const DoorstepModel = require("./models/Doorstep");
const app = express()
app.use(express.json())
app.use(cors())
mongoose.connect("mongodb://localhost:27017/Doorstep")
app.post('/signup', (req,res) => {
    DoorstepModel.create(req.body)
    .then(Doorstep => res.json(Doorstep))
    .catch(err => res.json(err))
})
app.post('/signin', (req,res) => {
    const {email,password} = req.body;
    DoorstepModel.findOne({email:email})
    .then(user => {
        if(user) {
            if(user.password === password){
                res.json("success")
            }else{
                res.json("password is incorrect")
            }
        }else{
            res.json("no record found")
        }
    })
})
app.listen(3001, () => {
    console.log("Server is running")
})