import express from 'express';
import { connectDB } from '../config/db.js';
import notesRoutes from './routes/notesRoutes.js';
import dotenv from 'dotenv';
import rateLimiter from '../middleware/rateLimiter.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

connectDB();

//midleware
app.use(express.json());
app.use(rateLimiter); // Apply the rate limiter middleware to all routes

// app.use((req, res, next) => {
//     console.log(`Req method is ${req.method} and req url is ${req.url}`);
//     next();
// });

app.use("/api/notes", notesRoutes);

app.listen(PORT, () => {
    console.log('Server is running on port', PORT);
});

