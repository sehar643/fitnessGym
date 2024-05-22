import User from "../models/userModel.js";
import Activity from "../models/activityModel.js";

export const Addactivity = async (req, res) => {
  const { activityName, phone, activityTime, bookingDate } = req.body;
  const user = req.user;

  const checkuser = await User.findById(user._id);
  if (!checkuser) {
    return res.status(404).send({ Message: "User Not Found" });
  }

  try {
    const datasave = new Activity({
      activityName: activityName,
      phone: phone,
      activityTime: activityTime,
      bookingDate: bookingDate,
      userId: user._id,
    }).save();

    return res.status(200).send({ Message: "Activity Created Successfully" });
  } catch (error) {
    return res.status(400).send({ Message: "Activity Creation Failed", error });
  }
};

export const GetactivityBYID = async (req, res) => {
  try {
    const { id } = req.params;
    const activity = await Activity.findById(id);
    return res.status(200).send(activity);
  } catch (error) {
    console.log(error.message);
  }
};

export const activites = async (req, res) => {
  const user = req.user;
  try {
    const userfind = await Activity.find({ userId: user._id }).populate(
      "userId"
    );
    return res.status(200).send(userfind);
  } catch (error) {
    console.log(error.message);
  }
};

export const Updateactivity = async (req, res) => {
  const { id } = req.params;
  const { activityName, phone, activityTime, bookingDate } = req.body;
  const user = req.user;

  if (!activityName || !phone || !activityTime || !bookingDate) {
    return res.status(400).send({ Message: "All fields must be provided" });
  }

  try {
    const activity = await Activity.findById(id);
    if (!activity) {
      return res.status(404).send({ Message: "Activity Not Found" });
    }

    activity.activityName = activityName;
    activity.phone = phone;
    activity.activityTime = activityTime;
    activity.bookingDate = bookingDate;
    await activity.save();

    return res.status(200).send({ Message: "Activity Updated Successfully" });
  } catch (error) {
    return res
      .status(500)
      .send({ Message: "An error occurred", error: error.message });
  }
};

export const deleteactivity = async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await Activity.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).send({ Message: "Activity Not Found" });
    }
    return res.status(200).send({ Message: "Activity Deleted Successfully" });
  } catch (error) {
    console.log(error.message);
  }
};
