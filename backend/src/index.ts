import dotenv from "dotenv"
import {app} from './app'
dotenv.config({
    path: './.env'
})


const start = () => {
    try {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
        })        
    } catch (error) {
        console.log("MONGO db connection failed !!! ", error);
    }

}

start()