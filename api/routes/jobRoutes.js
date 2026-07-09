import express from 'express'
import { createJob, deleteJob, getJob, getJobs, updateJob } from '../controllers/jobsControler.js'


const router = express.Router()

router.post('/api/jobs/addJob',createJob)
router.get('/api/jobs/getJobs',getJobs)
router.get('/api/jobs/getJob/:id',getJob)
router.patch('/api/jobs/updateJobs/:id',updateJob)
router.delete('/api/jobs/deleteJob/:id',deleteJob)



export default router;