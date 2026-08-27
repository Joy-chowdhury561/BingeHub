import {rateLimit} from "express-rate-limit"

const searchLimit=rateLimit({
    windowMs:2000,
    limit:1,
    message:"too many requests try again later"
})
export default searchLimit