import express from 'express'
import { GetUserbyID, Getallusers, Userlogin, Userregistration } from '../Controller/user.controller.js'


const router = express.Router()


router.post('/user-register' , Userregistration)
router.post('/user-login' , Userlogin)
router.get('/getallusers' , Getallusers)
router.get('/getuserbyId/:id'  , GetUserbyID)




export default router