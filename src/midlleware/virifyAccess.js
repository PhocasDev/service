import jwt from "jsonwebtoken"

export function verifyAccess(passRole) {
    return (req, res, next) => {
        const token = req.headers['auth-token']
        if (!token) {
            return res.status(404).json({ message: "NO token provided" })
        } else {
            try {
                const verifyToken = jwt.verify(token, process.env.SCRET_KEY, { expiresIn: '2d' })
                req.user = verifyToken.user
                if (passRole != verifyToken.user.role) {
                    return res.status(401).json({ message: "Please you dont have access" })
                }else{
                    return next()
                }
            } catch (error) {
                if((error.name = "jsonWebTokenError")){
                    return res.status(401).json({message:"Invalid token or expired token"})
                }else{
                   
                    return res.status(500).json({message:`error is ${error}`})
                }

            }
        }
    }

}