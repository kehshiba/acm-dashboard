import mongoose from "mongoose";
import dotenv from "dotenv";
import {users,posts} from "../data/index.js"

import User from "../models/User.js";
import Post from "../models/Post.js";
export const dbConnect = (app) => {
    dotenv.config();
    const PORT = process.env.PORT || 3002;
    console.log(process.env.MONGO_URL);
    mongoose.connect(process.env.MONGO_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(()=>{

    app.listen(PORT,()=>console.log(`Server PORT ${PORT}`))
    // User.insertMany(users);
    // Post.insertMany(posts);
}).catch((error)=>{console.log(error);})
}
