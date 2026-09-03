import {rateLimit} from "express-rate-limit"

const searchLimit=rateLimit({
    windowMs:300,
    limit:1,
    message:"too many requests try again later"
})
export default searchLimit