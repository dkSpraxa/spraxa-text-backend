const mongoose = require("mongoose")

const notesSchema = mongoose.Schema({
    title:{
        type:String,
        required:[true,"Please provide a title"],
        trim:true
    },
    message:{
        type:String,
        required:[true,"Please provide your message"],
        trim:true
    },
})


module.exports = mongoose.model("notes",notesSchema)