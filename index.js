import express from "express";
import colors from "colors";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routers/authRoute.js";
import activity_router from "./routers/activity.routes.js";
import dbConnection from "./database/dbcon.js";

// ENV File setup
dotenv.config();
// Databse connection established here
dbConnection();
// rest object
const app = express();
// For debugging code in development mode
app.use(morgan("dev"));
// text conversion to json format
app.use(express.json());
// Enabling CORS
app.use(
  cors({
    credentials: true,
  })
);

app.use("/uploads", express.static("./uploads"));

app.use("/api/auth", router);
app.use("/api/activities", activity_router);
// env file calling / environment variables importing
const port = process.env.PORT || 7000;
// const mode = process.env.App_Mode
// Listening of PORT on specific ip address
app.listen(port, () => {
  console.log(`Server is running on ${port} Port`.bgBlue);
});

// app.use(router)

// http://localhost:6000/api/v1/auth

// app.use("/api/v2/auth")

// app.use("/api/v1/auth")
// app.use("/api/v1/sale")

// app.get("/", (req, res)=>{
//     res.send("Home Page")
// })
