// import mongoose from'mongoose';
// import { DB_NAME } from './constants';
import connectDB from './db/index.db.js';
import dotenv from 'dotenv';


dotenv.config({
    path:'./env'
})
 
connectDB()

app.on("error",(error)=>{
   console.log("error",error);
   throw error   
})

// server start ( listen)
.then(()=>{
    app.listen(process.env.PORT || 8000)// it will save from data crash
    console.log(`server is running on port ${process.env.PORT}`);
    
})
// if database failed 
.catch((error)=>{
    console.log(" mongodb connection failed !!",error);
})









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