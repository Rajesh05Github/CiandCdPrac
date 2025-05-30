import express from "express";
import cors from "cors";
import userRoutes from "./Router/UserRoute.js"
import { dbConnection } from "./mongodbConn.js";

const app = express();
app.use(express.json());
dbConnection()


const corsOptions = {
  origin: [
    "http://localhost:5173",               
    "https://cicdfrontend.rajeshit.xyz"    
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};


app.use(cors(corsOptions))

app.use("/api",userRoutes)
app.listen(5004, () => {
  console.log("Server is running on port 5004");
});
