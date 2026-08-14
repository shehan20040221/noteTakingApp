import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://samaranayaka2004_db_user:ObOtpebaqhXqvmHy@cluster0.oxpiewx.mongodb.net/?appName=Cluster0");
        console.log("MongoDB connected successfully");
    }catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

// mongodb+srv://samaranayaka2004_db_user:ObOtpebaqhXqvmHy@cluster0.oxpiewx.mongodb.net/?appName=Cluster0