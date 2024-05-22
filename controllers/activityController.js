import User from "../Modals/user.modal.js";
import Activity from "../Modals/Activityschema.js";


export const Addactivity = async(req , res) =>{
   const {activityname , description , userID } = req.body

   if (!activityname || !description){
       return res.status(403).send({Message:"Fill all the fields"})
   }

   const checkuser = await User.findById(userID)
   if (!checkuser){
      return res.status(404).send({Message:"User Not Found"})
   }

   const datasave  = await new Activity({
      activityname , 
      description,
      StaffID:userID
   }).save()
   if (datasave){
      return res.status(200).send({Message:"Activity Created Successfully"})
  }else{
      return res.status(400).send({Message:"Activity Created Failed"})
  }

} 


export const GetactivityBYID = async(req , res) => {
   const {StaffID} = req.params;
   try {
      const userfind = await Activity.find({StaffID}).populate('StaffID' , 'name email');
      return res.status(200).send(userfind)
   } catch (error) {
      console.log(error.message)
   }

}































// import Activity from '../models/activityModel.js'; // Adjust the import path as necessary

// // Create a new activity

// export const createActivity = async (req, res) => {
//     try {
//         const { ActivityName, BookingDate, ActivityTime, Phone } = req.body;
//         const newActivity = new Activity({
//             ActivityName,
//             BookingDate,
//             ActivityTime,
//             Phone,
//             userID: req.user._id 
//         });
//         const savedActivity = await newActivity.save();
//         res.status(201).json(savedActivity);
//     } catch (error) {
//         res.status(500).json({ message: 'Error creating activity', error });
//         console.log(error.message | error)
//     }
// };


// // Get all activities
// export const getActivities = async (req, res) => {
//     try {
//         const activities = await Activity.find();
//         res.status(200).json(activities);
//     } catch (error) {
//         res.status(500).json({ message: 'Error fetching activities', error });
//     }
// };

// // Get an activity by ID
// export const getActivityById = async (req, res) => {
//     const { id } = req.params;

//     try {
//         const activity = await Activity.findById(id);
//         if (!activity) {
//             return res.status(404).json({ message: 'Activity not found' });
//         }
//         res.status(200).json(activity);
//     } catch (error) {
//         res.status(500).json({ message: 'Error fetching activity', error });
//     }
// };

// // Update an activity
// export const updateActivity = async (req, res) => {
//     const { id } = req.params;
//     const { ActivityName, BookingDate, ActivityTime, Phone, userID } = req.body;

//     try {
//         const updatedActivity = await Activity.findByIdAndUpdate(
//             id,
//             { ActivityName, BookingDate, ActivityTime, Phone, userID },
//             { new: true, runValidators: true }
//         );

//         if (!updatedActivity) {
//             return res.status(404).json({ message: 'Activity not found' });
//         }

//         res.status(200).json(updatedActivity);
//     } catch (error) {
//         res.status(500).json({ message: 'Error updating activity', error });
//     }
// };

// // Delete an activity
// export const deleteActivity = async (req, res) => {
//     const { id } = req.params;

//     try {
//         const deletedActivity = await Activity.findByIdAndDelete(id);
//         if (!deletedActivity) {
//             return res.status(404).json({ message: 'Activity not found' });
//         }
//         res.status(200).json({ message: 'Activity deleted successfully' });
//     } catch (error) {
//         res.status(500).json({ message: 'Error deleting activity', error });
//     }
// };

