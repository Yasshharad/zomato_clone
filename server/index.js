import express from "express";
import dotenv from "dotenv";

// Database connection
import ConnectDB from "./database/connection";

import Auth from "./api/auth";

import Food from "./api/food";

dotenv.config();

const zomato_clone = express();

zomato_clone.use(express.json());

zomato_clone.get("/", (req, res) => {
    res.json({
        message: "Server is running",
    });
});

// /auth/signup
zomato_clone.use("/auth", Auth);

//  /food
zomato_clone.use("/food", Food);

const PORT = 4000;

zomato_clone.listen(PORT, () => {
    ConnectDB()
        .then(() => {
            console.log("Server is running !!!");
        })
        .catch((error) => {
            console.log("Server is running, but database connection failed...");
            console.log(error);
        });
});