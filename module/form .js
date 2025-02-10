const mongoose =require('mongoose')

const studentSchema= new mongoose.Schema({
    name:String,
    description:String
})
const studentModels=mongoose.models("student",studentSchema)
models.exports=studentModels
