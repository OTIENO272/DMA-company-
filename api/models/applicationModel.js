import mongoose from 'mongoose'

const applicationSchema =mongoose.Schema({
    fName:{
        type:String,
        required:true,
    },
    sName:{
        type:String,
        required:true
    }
    ,email:{
        type:String,
        required:true
    },
    number:{
        type:String,
        required:true
    },
    position:{
        type:String,
        required:true
    },
    experience:{
        type:Number,
        required:true
    },
    resumeUrl:{
        type:String,
        required:true
    }
     ,
     skills:{
        type:String
     },status:{
        type:String,
        enum:['New Lead','Interviewing','Hired','Declined'],
        default:'New Lead'
     }
},{timestamps:true})

const Applicant = mongoose.model('Applicant',applicationSchema)
export default Applicant;