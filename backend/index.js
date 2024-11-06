import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import ratingsRouter from "./route/rating.route.js";
const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();
const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;
try {
  mongoose.connect(URI);
  console.log("connected to Database");
} catch (error) {
  console.log("Error:" + error);
}
app.use("/book", bookRoute);
app.use("/user", userRoute);
app.use("/", ratingsRouter);
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
