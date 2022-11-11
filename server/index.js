import express from "express";
import dotenv from "dotenv";

// database connection

import ConnectDB from "./database/connection";

dotenv.config();

const zomato = express();

zomato.use(express.json());

zomato.get("/", (req, res) => {
    res.json({
        message: "Server is running",
    });
});

const PORT = 4000;

zomato.listen(PORT, () => {
    ConnectDB()
        .then(() => {
            console.log("Server is runnig!!");
        })
        .catch((error) => {
            console.log("Server is runnig, but database is not connected!!");
            console.log(error);
        })
})