import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log("connected to mongoose successfully")
}).catch((err) => {
    console.log(err)
});

const app = express();

const PORT = '3001';

app.listen(PORT, () => {
    console.log('Server is running on server', PORT)
});