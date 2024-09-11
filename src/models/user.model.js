import mongoose, {Schema} from 'mongoose'
import jwt from jsonwebtoken
import bcrypt from 'bcrypt'



const userSchema= new Schema(
    {   
        username:{
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true//  index true for searching field to enable sorting fillter etc
        },
        email:{
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        fullName:{
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true
        },
        avatar:{
            type: String, // cloudnary url
            required: true,
            
        },
        coverImage:{
            type: String,      
        },
        watchHistory:[
            {
                type: Schema.Types.ObjectId,
                ref:"Video"
            }
        ],
        password:{
            type:String,
            required:[true,"Password is required"]
        },
        refreshToken:{
            type:String
        }
},
{
    timestamps: true
})

 // hook for password hashing 

userSchema.pre("save",async function (next){

    if(!this.isModified("password")) return next(); 

    this.password = bcrypt.hash(this.password,10)

    next() //  next function is    used  to call the next middleware function  in the middleware stack.


})
// custom method for asking weather user  is authenticated  or not(Comparing)

    userSchema.methods.isPasswordCorrect = async function (password)
    {
         return await  bcrypt.compare(password, this.password)
    }




export const User= mongoose.model("User",userSchema);
























// const userSchema = new mongoose.Schema({

// },{timestamps})