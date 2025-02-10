import mongoose, { connect } from "mongoose";
import env from 'dotenv';
import express from 'express';


env.config();
const MONGO_URI = process.env.MONGO_URL;
const express=reuire('express')
const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(" Connected to MongoDB");
    } catch (err) {
        console.error(" MongoDB connection error:", err);
        process.exit(1); 
    }
    module.exports={
        connect:function(){
            console.log(" connected")
        }
    };
};

export default connectDB;
