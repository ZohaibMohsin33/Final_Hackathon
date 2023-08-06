import UserModel from '../models/UserModel.js'
import bcyrpt from 'bcrypt'
import jwt from 'jsonwebtoken'


export const createUser = async (req,res) => {
    const{name,email,password} = req.body
    try{
        const results = await UserModel.findOne({email})
        if(results){
            return res.send({error : "This user already exists"})
        }
        
        const newPassword = await bcyrpt.hash(password,10)

        const output = new UserModel({
            name,
            email,
            password : newPassword
        })

       output.save()
       .then(() =>
         res.status(200).send({msg : "User is created successfully"})
       )
       .catch(()=>{
           return res.status(401).send({error : "Couldn't create user"})
       })
    }

    catch(error){
        res.status(401).send({error})
    }
    

}

export const loginUser = async (req,res) => {

    const {email,password} = req.body
    console.log(email,password)

    try{
        const user = await UserModel.findOne({email})

        if(!user){
            return res.send({error : "User doesn't exists"})
        }
        console.log(user)

        const results = await bcyrpt.compare(password,user.password)
        if(results){

            const token = jwt.sign({
                email : user.email,
                userId   : user._id
            },
            process.env.SECRET_KEY,
            {expiresIn : '24h'})

            return res.status(200).send({
                msg: "Login Successful...!",
                email : user.email,
                token

            })
        }

        return res.status(400).send({error : "Passwords not matching"})

    }
    catch(error){
        res.status(400).send({error})
    }
}