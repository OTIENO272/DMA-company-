import express from 'express'
import { createApplication, deleteApplicant, getApplicant, getApplicants, updateApplicationStatus } from '../controllers/applicationController.js'

const appRouter =express.Router()

appRouter.post('/api/apply/sendApplication',createApplication)
appRouter.get('/api/apply/getApplication/:id',getApplicant)
appRouter.get('/api/apply/getApplications',getApplicants)
appRouter.patch('/api/apply/updateStatus/:id',updateApplicationStatus)
appRouter.delete('/api/apply/deleteApplicant/:id',deleteApplicant)



export default appRouter