const express = require('express');
const ejs = require('ejs');

const app = express();


app.get('/',(request,response)=>{
    response.send({
        name:'Teo',
        height: 180
    })
});
app.get('/user/:id',(req,res)=>{
    const id = +req.params.id
    const type = typeof id
    res.send({
        id,
        type
    })
});

app.get('/a',(req,res)=>{
    // res.sendStatus(404)
    // console.log(__dirname);
    res.sendFile(__dirname+'./views/a.html');
});


class Tinh{
    constructor(){

    }
    
}


const port = process.env.PORT || 3000
app.listen(port,()=>{
    console.log('Server started on port '+port)
})



