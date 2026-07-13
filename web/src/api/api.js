import api from './axios.js'


const getJobs = async()=>{

    try {
        const res= await api.get('/jobs/getJobs')
      
        return res.data.jobs;
    } catch (error) {
        console.log(error.response?.data?.message || error.message)
        throw error;
        
    }

}

const getJobDetails=async(_id)=>{
   try {
    const res = await api.get(`/jobs/getJob/${_id}`)
     
    return res.data.job;
   
    
   } catch (error) {
    console.log(error.response?.data?.message || error.message)
        throw error;
   }
}

const loginApi =async({email,password})=>{
   try {
    const user = await api.post('/auth/login',{
        email,password
    })
    return user.data;
   } catch (error) {
   
       throw new Error(
  error.response?.data?.error || "Something went wrong",
  { cause: error }
 );
   }
}

const signupApi =async({username, email, password, confirmPassword})=>{
   try {
    const user = await api.post('/auth/signup',{
        username, email, password, confirmPassword
    })
    return user.data;
   } catch (error) {
    throw new Error(
  error.response?.data?.error || "Something went wrong",
  { cause: error }
);
   }
}

const addNewJob =async(formData)=>{
    
    try {
        const job = await api.post('/jobs/addJob',formData)
        return job.data
    } catch (error) {
        throw new Error(
            error.response?.data?.error ||'Something went wrong',{cause:error}
        )
    }

}
const deleteJobApi=async(jobId)=>{
    try {
        const res = await api.delete(`/jobs/deleteJob/${jobId}`)
        return res.data
    } catch (error) {
         throw new Error(
            error.response?.data?.error ||'Something went wrong',{cause:error}
        )
    }
}
export {getJobs,getJobDetails,loginApi,signupApi,addNewJob,deleteJobApi}