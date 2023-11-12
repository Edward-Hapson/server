const express = require('express')
const router = require('./routes/main')
const app = express();


app.use('/api', router)
// app.get('/api',(req,res)=>{
//    res.json('hello, world') 
// })

app.listen(4000, ()=> {
    console.log('server connected on port 4000')
})