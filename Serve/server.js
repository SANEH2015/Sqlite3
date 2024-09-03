const express = require('express');
const cors = require('cors');
const morgan = require('morgan')

const app = express()
app.use(cors());
app.use(express.json());


app.get('/',(req,res) =>{
    const car ={
        id:"1",
        name:"polo",
        color:"black",

    }
    res.json(car)
//    res.send('hello you are in the right place') 
})

















app.use(morgan('tiny'));
app.listen(5000,()=>{
    console.log('Your serve is running:http://localhost:5000')
})
