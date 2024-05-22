import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, },
    password: { type: String, required: true },
    userImg: { type: String },
    role: { type: String, default: 'user' },    
})




const User = mongoose.model("users", userSchema)
export default User;



// enum ['admin', 'user', 'programmer']
// role: { type: String, default: 'programmer' },    
