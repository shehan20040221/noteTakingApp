import express from 'express';
import { connectDB } from '../config/db.js';
import notesRoutes from './routes/notesRoutes.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

connectDB();

app.use("/api/notes", notesRoutes);

app.listen(PORT, () => {
    console.log('Server is running on port', PORT);
});

//mongodb+srv://samaranayaka2004_db_user:954x4R5aAJgShNZF@cluster0.weugpqu.mongodb.net/?appName=Cluster0