const { default: mongoose } = require('mongoose')
const db=require('mongoose')

const data=db.Schema({
  userEmail: String,
  details:{
      name: String,
      src: String,
  }
})
const dbdata=new db.model('datas',data)
module.exports=dbdata

