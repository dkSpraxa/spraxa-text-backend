const mongoose = require("mongoose")
const bcrypt  = require("bcryptjs")

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please provide your name"],
        trim:true
    },
    email:{
        type:String,
        required:[true,"Please provide your email"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"Please create your password"],
        minLength:[8,"password should be atlest 8 charactes"]
    }
})

userSchema.pre("save",async function(){
    this.password = await bcrypt.hash(this.password,10)
})

userSchema.methods.comparePassword = async function (password) {
    return bcrypt.compare(password,this.password)
}


module.exports = mongoose.model("users",userSchema)