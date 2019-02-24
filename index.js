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
    res.sendFile(__dirname+'/views/a.html');
});

app.get('/:so_a/:pheptinh/:so_b',(req,res)=>{
    const {so_a , pheptinh, so_b} = req.params
    const t = new Tinh(so_a,so_b,pheptinh)
    res.send(t.getResult())
})


class Tinh{
    constructor(number_a,number_b,tenpheptinh){
        this.number_a = number_a;
        this.number_b = number_b;
        this.tenpheptinh = tenpheptinh
    }
    get pheptinh(){
        if(this.tenpheptinh==='cong') return '+'
        else if(this.tenpheptinh==='tru') return '-'
        else if(this.tenpheptinh==='nhan') return '*'
        return '/'
    }
    getResult(){
        // 4 + 5 = 9
        const string = `${this.number_a} ${this.pheptinh} ${this.number_b}`
        return `${string} = ${eval(string)}` 
    }
}
// const t = new Tinh(2,3,'+')
// console.log(t.getResult())

const port = process.env.PORT || 3000
app.listen(port,()=>{
    console.log('Server started on port '+port)
})



