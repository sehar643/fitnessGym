import bcrypt from 'bcrypt'
// hasing a plain password to hashed symbols
export const hashPassword = async(password)=>{
    try {
            const saltRounds = 10;
            let hashedPassword = await bcrypt.hash(password, saltRounds)
            return hashedPassword

    } catch (error) {
            return res.status(403).json({Message: "Error in hashing password", error})
    }
}
// comparing hashed password with plain password
export const comparePassword = async(password, hashedPassword) =>{
        return bcrypt.compare(password, hashedPassword)
}



