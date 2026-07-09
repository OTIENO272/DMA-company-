import express from 'express'
import router from './routes/jobRoutes.js'
import userRouter from './routes/userRoutes.js'
import cors from 'cors'

const app = express()

app.use(cors(
   { origin:"http://localhost:5173"}
))
app.use(express.json())



app.use(router)
app.use(userRouter)


export default app