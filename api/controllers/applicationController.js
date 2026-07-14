import Applicant from "../models/applicationModel.js";

const getApplicants= async(res,req)=>{

    try {

        const applications = await Applicant.find()
        res.status(200).json(applications)
        
    } catch (error) {
        res.status(500).json({err:'Internal server Error!',error:error.message})
    }

}

const createApplication = async(req,res)=>{
    try {
        const {fname,sName,email,number,position,experience,resume,skills,status}= req.body
        const application= await Applicant.create({fname,sName,email,number,position,experience,resume,skills,status})
    } catch (error) {
       res.status(500).json({err:'Internal server Error!',error:error.message})
    }
}

const getApplicant=async()=>{
    try {
        
    } catch (error) {
        res.status(500).json({err:'Internal server Error!',error:error.message})
    }
}
export { getApplicants,createApplication}