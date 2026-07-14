import express from 'express'
import router from './routes/jobRoutes.js'
import userRouter from './routes/userRoutes.js'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import appRouter from './routes/applicantRoutes.js'

const app = express()


app.use(express.json())

app.use(express.urlencoded({extended:false}))
app.use(cookieParser())
app.use(cors(
   { origin:"http://localhost:5173",credentials:true}
))

app.use(appRouter)


app.use(userRouter)
app.use(router)




export default app