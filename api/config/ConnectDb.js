const mongoose = require('mongoose')


const ConnectDb = async()=>{
    try {
       await mongoose.connect(process.env.MONGO_URI);
    console.log('succeffully connexion to database');
    } catch (error) {
        console.error(error);
    }
}
module.exports=ConnectDb;
