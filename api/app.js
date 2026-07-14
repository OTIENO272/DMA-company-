import express from 'express'
import router from './routes/jobRoutes.js'
import userRouter from './routes/userRoutes.js'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import appRouter from './routes/applicantRoutes.js'

const app = express()

const allowedOrigins = [
  "http://localhost:5173",
  "https://dma-labs-irxq-three.vercel.app",
];

app.use(express.json())

app.use(express.urlencoded({extended:false}))
app.use(cookieParser())
app.use(cors({
  origin: function (origin, callback) {
    // Allow requests from Postman or server-to-server
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    callback(new Error("Not allowed by CORS"));
  },
  credentials: true,
}));


app.use(userRouter)
app.use(router)
app.use(appRouter)




export default app