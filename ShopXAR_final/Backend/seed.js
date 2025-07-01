// seed.js
import mongoose from "mongoose";
import dotenv from "dotenv";
import Analytics from "./models/Analytics.js";
import analyticsData from "./analyticsData.js";

dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(async () => {
  console.log("MongoDB connected");

  try {
    await Analytics.deleteMany(); // Optional: Clears old data
    const result = await Analytics.create(analyticsData);
    console.log("Data inserted:", result);
  } catch (error) {
    console.error("Error inserting data:", error);
  } finally {
    mongoose.disconnect();
  }
});
