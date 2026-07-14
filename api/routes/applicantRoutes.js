import express from 'express'
import { createApplication, deleteApplicant, getApplicant, getApplicants, updateApplicationStatus } from '../controllers/applicationController.js'
import requireAuth from '../middleware/requireAuth.js'
import upload from '../middleware/upload.js'

const appRouter =express.Router()

appRouter.post('/api/applicants/sendApplication',upload.single('resume') ,createApplication)

//api end-points protection 
appRouter.use(requireAuth)
appRouter.get('/api/applicants/getApplication/:id',getApplicant)
appRouter.get('/api/applicants/getApplications',getApplicants)
appRouter.patch('/api/applicants/updateStatus/:id',updateApplicationStatus)
appRouter.delete('/api/applicants/deleteApplicant/:id',deleteApplicant)



export default appRouter