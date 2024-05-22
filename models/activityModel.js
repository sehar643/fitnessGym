import mongoose from "mongoose";

const ActivitySchema = new mongoose.Schema({
  activityName: { type: String, required: true },
  bookingDate: { type: String, required: true },
  activityTime: { type: String, required: true },
  phone: { type: String, required: true },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
});

const Activity = mongoose.model("activity", ActivitySchema);
export default Activity;
