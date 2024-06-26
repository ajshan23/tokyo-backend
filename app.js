import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import userRouter from "./routes/user.routes.js"
import adminRouter from "./routes/admin.routes.js"
const app=express()







app.use(cors({
    origin:process.env.ORIGIN,
    credentials:true
}))




app.use(express.json(
    {
        limit:"16kb"
    }
))

app.use(express.urlencoded({extended:true,limit:"16kb"}))

app.use(cookieParser())


app.use("/api/v1/users",userRouter)
app.use("/api/v1/admin",adminRouter)

export {app}