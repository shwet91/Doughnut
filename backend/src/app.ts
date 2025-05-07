import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    // origin: process.env.CORS_ORIGIN,
    origin: 'http://localhost:3000',
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

app.get('/', (req, res) => {
    res.send('Hello from TypeScript + Node.js server! funnnnnn');
  });
  

//routes import
import testRouter from "./routes/test.route"
import userRouter from "./routes/user.route"



//routes declaration

app.use("/api/v1/testRouter" , testRouter)
app.use("/api/v1/user" , userRouter)

// http://localhost:8000/api/v1/users/register

export { app }