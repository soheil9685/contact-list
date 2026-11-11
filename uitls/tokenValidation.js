import { verify } from "jsonwebtoken"

export default function tokenValidation(context){
    // Token in request header
        const { token } = context.req.cookies
    
        // Check if token exists
        if (!token) {
            return false
        }
    
        // Verify token
        try {
            let tokenPayload = verify(token, process.env.JWT_SECRET)
            return tokenPayload
        } catch (error) {
            return false
        }
}