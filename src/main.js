import express from "express";
import mongoose from "mongoose";
import { rateLimit } from "express-rate-limit";
import userRouter from "./features/users/users.routes.js";

mongoose
  .connect("mongodb://127.0.0.1:27017/myecommerce")
  .then(() => console.log("DB connection successful"))
  .catch((err) => console.log("DB connection failed: ", err));

const app = express();
app.use(express.json());

const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  limit: 10, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
  standardHeaders: "RateLimit-*", // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
  legacyHeaders: true, // Disable the `X-RateLimit-*` headers.
  message: {
    message: "You have exceeded the API limit. Please contact admin",
  },
});

// Apply the rate limiting middleware to all requests.
app.use(limiter);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to 75 Days of DevOps Server" });
});

app.use("/users", userRouter);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
