import mongoose from "mongoose";


const Activityschema  = new mongoose.Schema({
  
    ActivityName: { type: String, required: true },
     BookingDate : { type: String, required: true},
     ActivityTime : { type: String, required: true},
     Phone : { type: String, required: true},
     userID : {type: mongoose.Schema.Types.ObjectId , ref: "users" , required: true},
  
  
  
    // activityname:{
    //     type:String,
    //     required:true
    // },
    // description:{
    //     type:String,
    //     required:true
    // },
    // StaffID:{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref:"users",
    //     required:true
    // }
   
})

const Activity = mongoose.model('activity' , Activityschema)
export default Activity












// import mongoose from "mongoose";

// const ActivitiesSchema = new mongoose.Schema({
//     ActivityName: { type: String, required: true },
//     BookingDate : { type: String, required: true},
//     ActivityTime : { type: String, required: true},
//     Phone : { type: String, required: true},
//     userID : {type: mongoose.Schema.Types.ObjectId },
// })




// const Activities = mongoose.model("Activity", ActivitiesSchema)
// export default Activities;
