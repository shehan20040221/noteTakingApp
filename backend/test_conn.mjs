import mongoose from "mongoose";

const uri = "mongodb+srv://samaranayaka2004_db_user:ObOtpebaqhXqvmHy@cluster0.oxpiewx.mongodb.net/?appName=Cluster0";

mongoose.connect(uri, { serverSelectionTimeoutMS: 8000 })
  .then(() => {
    console.log("MongoDB connected successfully");
    process.exit(0);
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1);
  });