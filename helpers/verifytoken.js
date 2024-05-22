import jwt from 'jsonwebtoken'

export const verifytoken = (req , res , next) =>{
    const token = req.headers["authorization"];

    if (!token){
        return res.status(403).send({message:"Token is required"})
    }
    
    try {
        const decoded =   jwt.verify(token , process.env.JWT_SECRET)
    req.user = decoded
    next()

    } catch (error) {
       return res.status(401).send({message:"Invalid Token"})
    }
};

