


// import express from 'express';
// import { getinfo, loginController, registerController } from '../controllers/authController.js';
// import upload from '../multer/imageAuth.js';
// import User from '../models/userModel.js';
// import { verifytoken } from '../helpers/verifytoken.js';
// import { 
//     createActivity, 
//     getActivities, 
//     getActivityById, 
//     updateActivity, 
//     deleteActivity 
// } from '../controllers/activityController.js'; // Import activity controllers

// const router = express.Router();

// // Auth routes
// router.post('/register', upload.single('photo'), registerController);
// router.post('/login', loginController);

// router.get('/protectedroute', verifytoken, getinfo);

// router.get('/userslist', async (req, res) => {
//     try {
//         const users = await User.find();
//         res.status(200).json(users);
//     } catch (error) {
//         res.status(500).json({ message: 'Error fetching users', error });
//     }
// });

// // Activity routes
// router.post('/activities', createActivity);
// router.get('/activities', getActivities);
// router.get('/activities/:id', getActivityById);
// router.put('/activities/:id', updateActivity);
// router.delete('/activities/:id', deleteActivity);

// export default router;
























import express from 'express'
import {getinfo, loginController, registerController} from '../controllers/authController.js'
import upload from '../multer/imageAuth.js';
import User from '../models/userModel.js';
import { verifytoken } from '../helpers/verifytoken.js';

let router = express.Router()

router.post("/register", upload.single('photo'), registerController)
router.post("/login", loginController)

router.get('/protectectedroute' , verifytoken , getinfo)

router.get("/userslist", async(req, resp)=>{
    let result = await User.find()
    resp.send(result)
})

export default router;



router.get("/main", registerController)