import express from 'express'
import { createJob, deleteJob, getJob, getJobs, updateJob } from '../controllers/jobsControler.js'
import requireAuth from '../middleware/requireAuth.js'


const router = express.Router()

router.get('/api/jobs/getJob/:_id',getJob)
router.get('/api/jobs/getJobs',getJobs)

router.use(requireAuth)

router.post('/api/jobs/addJob',createJob)

router.patch('/api/jobs/updateJobs/:_id',updateJob)
router.delete('/api/jobs/deleteJob/:id',deleteJob)



export default router;