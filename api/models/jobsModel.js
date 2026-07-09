import  mongoose from 'mongoose'

const jobSchema = new mongoose.Schema({

    title:{
        type:String,
        required:true
    },
    salary:{
        type:String,
        required:true,
    },
    location:{
        type:String,
        required:true
    }
    ,
    type:{
        type:String,
        required:true,
        enum: ['Full-time', 'Part-time', 'Contract', 'Remote']
    }
    ,
    summary:{
        type:String
    }
},{
    timestamps:true
})



 const Job =  mongoose.model ("Job",jobSchema);
 export default Job;
