import {rateLimit} from "express-rate-limit";

 const authRateLimiter=rateLimit({
    windowMs:15*60*1000,
    limit:10,
    message:"too many requests. try again later"
})
export default authRateLimiter