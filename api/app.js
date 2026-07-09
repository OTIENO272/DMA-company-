import express from 'express'
import router from './routes/jobRoutes.js'
import userRouter from './routes/userRoutes.js'

const app = express()

app.use(express.json())
app.use(router)
app.use(userRouter)


export default app