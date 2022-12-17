const mongoose = require('mongoose')


const childrenSchema = new mongoose.Schema({
    id:{type:String},
    age:{type:Number},
    name:{type:String},
    email:{type:String},
    phone:{type:String},
    geoInfo:{type:Object},
    connectionInfo:{type:Object},
   
},
{
    timestamps:true
})

module.exports = mongoose.model("children",childrenSchema);