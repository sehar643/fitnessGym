import mongoose from "mongoose";
import colors from "colors";

const dbConnection = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://techstack:techstack@stack.e3gvdol.mongodb.net/fitness?retryWrites=true&w=majority&appName=Stack"
    );
    console.log(`Database connected successfully`.bgMagenta);
  } catch (error) {
    console.log(`Error in DB connection`.bgRed);
  }
};
export default dbConnection;
