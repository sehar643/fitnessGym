import express from 'express'
import { Addactivity, GetactivityBYID } from '../Controller/activity.controller.js'




const router = express.Router()


router.post('/activityadd' , Addactivity)
router.get('/getactivitybyID/:StaffID' , GetactivityBYID)




export default router