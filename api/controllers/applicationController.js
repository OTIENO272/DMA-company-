import Applicant from "../models/applicationModel.js";

const getApplicants= async(req,res)=>{

    try {

        const applications = await Applicant.find().sort({createdAt:-1})
        res.status(200).json(applications)
        
    } catch (error) {
        res.status(500).json({err:'Internal server Error!',error:error.message})
    }

}

const createApplication = async(req,res)=>{
    try {
        const {fName,sName,email,number,position,experience,resume,skills,status}= req.body
        const application= await Applicant.create({fName,sName,email,number,position,experience,resume,skills,status})
        res.status(201).json(application)
    } catch (error) {
       res.status(500).json({err:'Internal server Error!',error:error.message})
    }
}

const getApplicant=async(req,res)=>{
    try {
        const {id}=req.params;
        const applicant = await Applicant.findById(id)
        res.status(200).json(applicant)
        
    } catch (error) {
        res.status(500).json({err:'Internal server Error!',error:error.message})
    }
}

const updateApplicationStatus=async(req,res)=>{
    try {
        const {id} = req.params;
        const {status} = req.body

        const updatedStatus = await Applicant.findByIdAndUpdate(id,{status})

        res.status(200).json(updatedStatus)
        
    } catch (error) {
        res.status(500).json({err:'Internal server Error!',error:error.message})
    }
}

const deleteApplicant=async(req,res)=>{
    try {
        const {id} = req.params;
        const deletedApplicant = await Applicant.findByIdAndDelete(id)
        res.status(200).json(deletedApplicant)
    } catch (error) {
       res.status(500) .json({err:'Internal server error',error:error.message})
    }
}
export { getApplicants,createApplication,getApplicant,updateApplicationStatus,deleteApplicant}