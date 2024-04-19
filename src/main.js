import express from 'express';
import mongoose from 'mongoose';
import userRouter from './features/users/users.routes.js';

mongoose
  .connect('mongodb://127.0.0.1:27017/myecommerce')
  .then(() => console.log('DB connection successful'))
  .catch((err) => console.log('DB connection failed: ', err));

const app = express();
app.use(express.json());
app.use('/users', userRouter);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
