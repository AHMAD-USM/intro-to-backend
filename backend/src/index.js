import dotenv from "dotenv";
import app from "./app.js"
import connectDB from "./config/database.js";

dotenv.config({
    path: './.env'
});

const startServer = async () => {
    try {
        await connectDB();
        app.on("error",(error) => {
            console.log("ERROR", error);
            throw error;
        }); 
        app.listen(process.env.PORT || 8000, () => {
            console.log(`server is running at port: ${process.env.PORT}`);
        })
    } catch (error) {
        console.log("mongo db connection failed", error);
    }
}


startServer();