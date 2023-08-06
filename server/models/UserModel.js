import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
    name : {
        type : String,
        require : [true, "Provide username"],
        unique : [true, "Please provide a valid username"]

    },
    email : {
        type : String,
        require : [true, "Provide email"],
        unique : [true, "Please provide a valid email"]

    },
    password : {
        type : String,
        require : [true, "Provide password"],
        unique : false
    },
    createdAt : {
        type : Date,
        default : Date.now

    },
    updatedAt : {
        type : Date,
        default : Date.now

    }


})

 const UserModel = mongoose.model('Users',UserSchema)
 export default UserModel;