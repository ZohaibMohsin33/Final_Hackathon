import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    userId : {
        type : String,
        unique : false,
        require : [true , "UserId is must to get"]
    },
    totalPrice : {
        type : Number,
        unique : false,
        require : [true , "Total price is must to send"]
    },
    items : [
        {
            productId : {
                type : String,
                unique : false,
                require : [true, "Send the productID"]
            },
            quantity : {
                type : String,
                unique : false,
                require : [true, "Tell me the quantity of the product"]
            }
        }
      
    ],
    status : {
        type : String ,
        unique : false,
        require : [true , "Status of the order is must"]

    },
    shippingAdress : {
        type : String,
        unique : false,
        require : [true , "Shipping address of the buyer must be there "]

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

const OrderModel = mongoose.model('Orders',OrderSchema)
export default OrderModel