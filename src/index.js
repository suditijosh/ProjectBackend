// import mongoose from'mongoose';
// import { DB_NAME } from './constants';
import connectDB from './db/index.db.js';
import dotenv from 'dotenv';


dotenv.config({
    path:'./env'
})

connectDB()










// const app=express()
// ( async()=>{
//     try {
//         mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
//         app.on("error",(error)=>{
//             console.log("error is there");
//             throw error   
//         })

//         app.listen(process.env.PORT,()=>{
//             console.log(`app is listening on port${process.env.PORT}`);
            
//         })
//     } catch (error) {
//         console.log("erroe:",error)
//         throw err
        
//     }

// })()