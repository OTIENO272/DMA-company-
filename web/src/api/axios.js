import axios from  'axios'

const api = axios.create({
   baseURL: import.meta.env.VITE_API_URL,
    withCredentials:true
})

api.interceptors.request.use((config)=>{
    const user = JSON.parse(localStorage.getItem('user'))

    if (user?.accessToken) {
        config.headers.Authorization = `Bearer ${user.accessToken}`
    }
    return config;
})


api.interceptors.response.use(
    (response)=>response,
    async(error)=>{
        const originalRequest = error.config

        if(error.response?.status === 403 && !originalRequest._retry){
            originalRequest._retry = true;

            try {
                const res = await api.post('/auth/refresh')
                const newAccessToken = res.data.accessToken

                const user = JSON.parse(localStorage.getItem('user'))
                localStorage.setItem('user',JSON.stringify({...user,accessToken:newAccessToken}))
                originalRequest.headers.Authorization = `Bearer ${newAccessToken}`

                return api(originalRequest)

                
            } catch (rejectError) {
                localStorage.removeItem('user')
                window.location.href = '/admin/login'
                return Promise.reject(rejectError)
            }
        
        }

        return Promise.reject(error)


    }
)
export default api;