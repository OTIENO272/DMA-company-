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

const getJobDetails=async()=>{
   try {
    const res = await api.get('/jobs/getJob/:id')
    return res.data.job;
   } catch (error) {
    console.log(error.response?.data?.message || error.message)
        throw error;
   }
}

export {getJobs,getJobDetails}