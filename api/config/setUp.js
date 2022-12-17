const dataSchema =require('../models/data.model')
const {data} = require('./data')

const init = async()=>{
    try {
       const dataExist = await dataSchema.find();
       if(dataExist.length==0){
        await dataSchema.insertMany(data);
        console.log('data added to data collection');
       } 
    } catch (error) {
        console.error(error);
    }
}
module.exports=init;