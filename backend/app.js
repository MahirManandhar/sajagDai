const express=require("express")
const app=express()
const connectDb = require("./config/dbConnection");
const cors=require("cors")
const errorHandler=require("./middleware/errorHandler")
const port='4000'
const dotenv = require("dotenv").config();
const cookieParser = require("cookie-parser")


connectDb();
app.use(express.json())
app.listen(port,()=>{
    console.log(`server started on port ${port}`);
    
})

app.use(cors())
app.use(cookieParser());
app.use(express.urlencoded({ extended:false}))


const planRouter=require('./routes/planRoutes')
const userRouter=require('./routes/userRoutes')
app.use("/plans",planRouter);
app.use("/user",userRouter);
app.use(errorHandler)
