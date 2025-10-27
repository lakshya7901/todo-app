import express, { json } from "express";
import taskRoutes from "./routes/taskRoutes.js";
import { connectDB } from "../config/db.js";
import dotenv from 'dotenv';
import cors from 'cors';

const port = 3000;
const app = express();

dotenv.config();

connectDB();

app.use(express.json());
app.use(cors({
    origin:['http://localhost:5173']
}));

app.use('/task', taskRoutes);

app.listen(port, () => {
    console.log(`Server listening on Port: ${port} `);
})