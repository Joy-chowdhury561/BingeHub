import {rateLimit} from "express-rate-limit";

const generalLimit=rateLimit({
    windowMs:60*1000,
    limit:120,
    message:"too many requests, try again later"
})
export default generalLimit