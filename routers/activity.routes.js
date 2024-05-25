import express from "express";
import {
  Addactivity,
  GetactivityBYID,
  activites,
  Updateactivity,
  deleteactivity,
  adminGetAllActivities,
} from "../controllers/activityController.js";
import { authenticate } from "../middlewares/auth.js";

const activity_router = express.Router();

activity_router.post("/create", authenticate, Addactivity);
activity_router.put("/update/:id", Updateactivity);
activity_router.get("/single/:id", GetactivityBYID);
activity_router.get("/all", authenticate, activites);
activity_router.delete("/delete/:id", authenticate, deleteactivity);

activity_router.get("/admin/activites", authenticate, adminGetAllActivities);
export default activity_router;
/// what is route chaining in nodejs
