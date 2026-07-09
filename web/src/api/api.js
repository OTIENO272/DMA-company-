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

const login =async()=>{
   try {
    const user = await api.post('/auth/login')
    return user;
   } catch (error) {
     console.log(error.response?.data?.message || error.message)
     throw error
   }
}

const signupApi =async({username, email, password, confirmPassword})=>{
   try {
    const user = await api.post('/auth/signup',{
        username, email, password, confirmPassword
    })
    return user.data;
   } catch (error) {
     console.log(error.response?.data?.message || error.message)
     throw error
   }
}


export {getJobs,getJobDetails,login,signupApi}