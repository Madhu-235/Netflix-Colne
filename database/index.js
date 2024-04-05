// import express from 'express';

const express=require('express')
const db=require('mongoose')
const router=require('./routes')
const cors =require('cors')



let app=express()
app.use(cors())
db.connect('mongodb://localhost:27017/Netfilxlist')
app.use(router)

app.listen(9999)