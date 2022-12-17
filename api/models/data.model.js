const mongoose = require('mongoose')


const dataSchema = new mongoose.Schema({

id:{type:String},
age:{type:Number},
name:{type:String},
email:{type:String},
phone:{type:String},
geoInfo:{type:Object},
children:{type:Array,  ref:'children'},
},
{
    timestamps:true
})

module.exports=mongoose.model('data',dataSchema)