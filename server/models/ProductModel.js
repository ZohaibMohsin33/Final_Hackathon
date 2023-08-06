import mongoose from "mongoose";


const ProductSchema = new mongoose.Schema({
    name : {
        type : String,
        require : [true, "Provide name"],
        unique : [true, "Please provide a valid name"]

    },
    category : {
        type : String,
        require : [true, "Provide category"],
        unique : false

    },
    description : {
        type : String,
        require : [true, "Provide description"],
        unique : false
    },
    size : {
        type : String,
        require : [true, "Provide size"],
        unique : false

    },
    price : {
        type : Number,
        require : [true, "Provide price"],
        unique : false

    },
    color : {
        type : String,
        require : [true, "Provide color"],
        unique : false

    },
    image : {
        type : String,
        require : [true, "Provide image"],
        unique : [true, "Image of the product isn't unique"]

    },
    createdAt : {
        type : Date,
        default : Date.now

    },
    stock : {
        type : Number,
        require : [true , "Provide a valid stock"]

    },
    ratings : [
        {
            userId : {
                type : String,
                require : false,
                unique : false
            },
            ratings : {
                type : String,
                require : false,
                unique : false
            },
            reviews : {
                type : String,
                require : false,
                unique : false
            }
        }
    ]


})

 const ProductModel = mongoose.model('Products',ProductSchema)
 export default ProductModel;