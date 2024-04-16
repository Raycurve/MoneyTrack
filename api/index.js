const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser'); 
const Transaction = require('./models/Transactions.js')
const mongoose = require('mongoose');

const app = express();
require('dotenv').config();
app.use(cors());
app.use(bodyParser.json()); 
// console.log(process.env.DATABASE_URL+"yay");
mongoose.connect(process.env.DATABASE_URL);
app.get('/api/test', (req, res) => {
    res.json({ message: 'test2' }); 
});

app.get('/api/trans', (req, res) => {
    res.json({ message: 'test2' }); 
});

app.post('/api/trans', (req, res) => {
    const {name, datee, descrii} = req.body;
    const transac = new Transaction({Name: name, Description:descrii, Datetime: datee});
    transac.save().then(()=>{
        console.log("data gaya yaya");
    })




    // mongoose.connect(process.env.DATABASE_URL)
    // .then(()=>{

    //     const {name, datee, descrii} = req.body;
    //     const transaction = Transaction.create({name,descrii,datee});
    // }
    // // console.log(process.env.DATABASE_URL);
    // ).then(()=>{
    //     res.json( transaction);  
    // })
    // // console.log(name+datee+descrii+"yayy");
});

app.listen(4040);