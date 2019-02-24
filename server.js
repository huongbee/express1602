const express = require('express');
const app = express()
app.set('view engine','ejs')
app.use(express.static('public'))


app.get('/file',(req,res)=>{
    const number = 12
    res.render('b',{number})
});


app.listen(3000,()=>{
    console.log('server started');
})