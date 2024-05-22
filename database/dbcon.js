import mongoose from "mongoose";
import colors from 'colors'

const dbConnection = async() =>{
    try {
            await mongoose.connect("mongodb://localhost:27017/authDb")
            console.log(`Database connected successfully`.bgMagenta)
        } catch (error) {
        console.log(`Error in DB connection`.bgRed)        
    }
}
export default dbConnection