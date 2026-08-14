import express from 'express';
import { connectDB } from '../config/db.js';
import notesRoutes from './routes/notesRoutes.js';

const app = express();

connectDB();

app.use("/api/notes", notesRoutes);

app.listen(5001, () => {
    console.log('Server is running on port 5001');
});

//mongodb+srv://samaranayaka2004_db_user:954x4R5aAJgShNZF@cluster0.weugpqu.mongodb.net/?appName=Cluster0