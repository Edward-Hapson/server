const express = require('express')

const app = express();


app.get('/api',(req,res)=>{
   res.json('hello, world') 
})

app.listen(4000, ()=> {
    console.log('server connected on port 4000')
})