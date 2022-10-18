const express=require('express')

const app=express()

app.listen(3000)

app.get('/',(req,res)=>{
    // res.send('<p>i am nofil</p>')
    res.sendFile('./view/index.html',{root:__dirname})
})

app.get('/about',(req,res)=>{
    // res.send('<p>i am nofil</p>')
    res.sendFile('./view/about.html',{root:__dirname})
})

app.get('/about-us',(req,res)=>{
    res.redirect('/about')
})

app.use((req,res)=>{
    res.sendFile('./view/404error.html',{root:__dirname})
})