import Job from '../models/jobsModel.js'


const createJob = async(req,res)=>{
    try {
        const {title,salary,type,location,summary} = req.body

        const job = await Job.create(req.body)
        res.status(201).json({job})

    } catch (error) {
        res.status(500).json({msg:'Internal server error',err:error.message})
    }

}

const getJobs=async(req,res)=>{
    try {

        const jobs = await Job.find()
        res.status(200).json({jobs})
        
    } catch (error) {
        res.status(500).json({msg:'Internal server error',err:error.message})
        
    }
}

const getJob=async(req,res)=>{
    try {

        const {_id} = req.params
        const job = await Job.findOne({id:_id});

        if(!job){
            return res.status(404).json({message:"Job Not Found"})
        }
        res.status(200).json({job})
    } catch (error) {
           res.status(500).json({msg:'Internal server error',err:error.message})
        
    }

}

const updateJob=async(req,res)=>{
    try {
         const {title,salary,type,location,summary} = req.body
        const {_id}=req.params
        const job = await Job.findOne({id:_id});
          if(!job){
            return res.status(404).json({message:"Job Not Found"})
        }

        const updatedJob = await job.updateOne(req.body)
        res.status(200).json({updatedJob})


    } catch (error) {
         res.status(500).json({msg:'Internal server error',err:error.message})
        
    }

}

const deleteJob=async(req,res)=>{

    try {
         const {_id}=req.params
         const job = await Job.findOne({id:_id});
          if(!job){
            return res.status(404).json({message:"Job Not Found"})
        }

        const deletedJob = await job.deleteOne({id:_id})
        res.status(200).json({deletedJob})
    } catch (error) {
        res.status(500).json({msg:'Internal server error',err:error.message})
    }

}
export {createJob,getJobs,getJob,updateJob,deleteJob}