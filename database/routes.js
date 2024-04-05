
const express=require('express')
const parser=require('body-parser')
const db=require('mongoose')
const model=require('./model/db')
const cont= require('./controller/controller')



const app=express()
app.use(parser.json())

// app.get('/a',(req,res)=>{
//     console.log('hello word')
// })

// app.post('/',(req,res)=>{
//     const {name,age,location}=req.body
//     let createdata= new model({
//         name,age,location
//     }) 
// })

app.post('/data',cont.create)
app.get('/data',cont.getdata)
// app.put('/data/:id',cont.update)
app.delete('/data/:id',cont.delete)

module.exports=app