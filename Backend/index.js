import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser'; 
import userRoutes from './route/user.route.js';
import bookRoutes from './route/book.route.js'; 
import userModel from './model/user.model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import postRoutes from './route/post.route.js';  

const app = express();
const URL = process.env.URL ;

dotenv.config();
// const port =process.env.PORT || 4000;
const port = 4001;
const URI = process.env.MongnoDBURI;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true,
}));
app.use(cookieParser());

//connect to mongoDB
try {
  mongoose.connect(URI);
  console.log("connected to mongoDB");

} catch (error) {
  console.log(" Error: ", error);
}

app.use('/book', bookRoutes);
app.use('/user', userRoutes);
app.use('/post', postRoutes);  

app.get('/', (req, res) => {
  res.send('hello')
});
app.listen(port,()=>{
    console.log(`app listening on port ${port}`);
});