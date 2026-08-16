import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected successfully");
    }catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
    }
};


//mongodb://samaranayaka2004_db_user:<db_password>@ac-ktbzidj-shard-00-00.oxpiewx.mongodb.net:27017,ac-ktbzidj-shard-00-01.oxpiewx.mongodb.net:27017,ac-ktbzidj-shard-00-02.oxpiewx.mongodb.net:27017/?ssl=true&replicaSet=atlas-kev7qk-shard-0&authSource=admin&appName=Cluster0