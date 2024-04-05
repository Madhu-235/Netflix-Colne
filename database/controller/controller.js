const model=require('../model/db')
const db=require('mongoose')


exports.create=(req,res)=>{

    const {userEmail,name,src}=req.body
   
    let createdata= new model({userEmail,details:{name,src}}) 

    createdata.save()
    .then(data=>{
        res.json(data)
    })

    const getid=req.params.id

    // const {name,src}=req.body

    // model.findByIdAndUpdate(getid,{name,src})
    // .then(data=>{
    //     res.json(data)
    // })
}

exports.getdata=(req,res)=>{
    const userEmail=req.query.userEmail
    model.find({userEmail})
    .then(data=>{
        res.json(data)
    console.log(data)})
}

exports.update=(req,res)=>{
    const getid=req.params.id

    const {userEmail,details:{name,src}}=req.body

    model.findByIdAndUpdate(getid,{userEmail,details:{name,src}})
    .then(data=>{
        res.json(data)
    })
}


exports.delete=(req,res)=>{
    const getid=req.params.id

    // const {userEmail,item}=req.body

    model.findByIdAndDelete(getid)
    .then(data=>{
        res.json(data)
    })

    // const getid=req.params.id

    // const {name,src}=req.body

    // model.findByIdAndUpdate(getid,{name,src})
    // .then(data=>{
    //     res.json(data)
    // })
}

