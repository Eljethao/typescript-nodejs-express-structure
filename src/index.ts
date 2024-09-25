import express, {Application} from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes";
import connectDB from "./config/db.config";

dotenv.config();

// Initialize express the Express application 
const app: Application = express();

// Midleware 
app.use(cors());
app.use(express.json());

// Connect to the MongoDB database 
connectDB();

//Routes 
app.use("/v1/api/auth", authRoutes);

// Set the port for the server 
const PORT = process.env.PORT || 8000;

// Start the server 
app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`);
})