const dataSchema = require('../models/data.model')






exports.getData = async(req,res)=>{

    const id = req.query.transactionId;
   
     
    try {
       let data;
       if(id){
          data = await dataSchema.find({id})
       } 
        return res.status(200).send(data)
       } 
       catch (error) 
       {
        return  res.status(500).send({error:error})
       }
 
       
       }
       
       exports.getAllData = async(req,res)=>{
         try {
            const AllData = await dataSchema.find();
            return res.status(200).send({AllData})
         } catch (error) {
            return res.status(500).send({error:error})
         }
       }
 