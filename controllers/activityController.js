import User from "../models/userModel.js";
import Activity from "../models/activityModel.js";

export const Addactivity = async (req, res) => {
  try {
    const { activityName, phone, activityTime, bookingDate } = req.body;
    for (let i in req.body) {
      if (!req.body[i]) {
        return res
          .status(400)
          .send({ message: "All fields must be provided", success: false });
      }
    }
    const user = req.user;

    const checkuser = await User.findById(user._id);
    if (!checkuser) {
      return res.status(404).send({ message: "User Not Found" });
    }

    const datasave = new Activity({
      activityName: activityName,
      phone: phone,
      activityTime: activityTime,
      bookingDate: bookingDate,
      userId: user._id,
    }).save();

    return res
      .status(200)
      .send({ message: "Activity Created Successfully", success: true });
  } catch (error) {
    return res
      .status(400)
      .send({ message: "Activity Creation Failed", error, success: false });
  }
};

export const GetactivityBYID = async (req, res) => {
  try {
    const { id } = req.params;
    const activity = await Activity.findById(id);
    return res
      .status(200)
      .json({ message: "Activity Found", data: activity, success: true });
  } catch (error) {
    return res
      .status(404)
      .send({ message: "Activity Not Found", success: false });
  }
};

export const activites = async (req, res) => {
  const user = req.user;
  try {
    const users = await Activity.find({ userId: user._id }).populate("userId");
    return res
      .status(200)
      .json({ message: "activites found", data: users, success: true });
  } catch (error) {
    return res.status(400).json({
      message: "error while getting all ativites",
      success: false,
    });
  }
};

export const Updateactivity = async (req, res) => {
  try {
    const { id } = req.params;
    const { activityName, phone, activityTime, bookingDate } = req.body;

    if (!activityName || !phone || !activityTime || !bookingDate) {
      return res.status(400).send({ message: "All fields must be provided" });
    }

    const activity = await Activity.findById(id);
    if (!activity) {
      return res.status(404).send({ message: "Activity Not Found" });
    }

    activity.activityName = activityName;
    activity.phone = phone;
    activity.activityTime = activityTime;
    activity.bookingDate = bookingDate;
    await activity.save();

    return res
      .status(200)
      .send({ message: "Activity Updated Successfully", success: true });
  } catch (error) {
    return res
      .status(500)
      .send({ message: "An error occurred", error: error.message });
  }
};

export const deleteactivity = async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await Activity.findByIdAndDelete(id);
    if (!deleted) {
      return res
        .status(404)
        .send({ message: "Activity Not Found", success: false });
    }
    return res
      .status(200)
      .send({ message: "Activity Deleted Successfully", success: true });
  } catch (error) {
    console.log(error.message);
  }
};
