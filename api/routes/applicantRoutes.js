import express from 'express'
import { createApplication, getApplicants } from '../controllers/applicationController.js'

const appRouter =express.Router()

appRouter.post('/api/apply/sendApplication',createApplication)
appRouter.get('/api/apply/getApplications',getApplicants)


export default appRouter