// import mongoose from "mongoose";
const mongoose = require('mongoose')

// let isconnected = false;

const connectDB = async() =>{
    // mongoose.set('strictQuery', true)

    // if(isconnected){
    //     console.log('database already connected')
    //     return;
    // }
    //hapson:7iCTcZ5Xa7A2eMQ
    try {
        await mongoose.connect('mongodb://localhost:27017',{
            dbName: 'SAPS',
            // useNewUrlParser: true,
            // useUnifiedTopology: true
        })

        // isconnected = true

        console.log('database connected')
    } catch (error) {
        console.log(error)
    }
}

module.exports = {connectDB}