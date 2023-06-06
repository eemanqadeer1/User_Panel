import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";


import cors from "cors";

//configure env
dotenv.config();

//databse config
connectDB();

const app = express()
app.use(cors())

//middelwares
app.use(express.json());
app.use(morgan("dev"));

// //routes
app.use("/auth", authRoutes);
 app.use("/user", authRoutes);
 app.use("/category", categoryRoutes);
 app.use("/product", productRoutes);


app.get("/",(req,res)=>{
    res.send("BACKEND RUNNING SUCCESSFULLY")
})


//PORT
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
  console.log(
    `Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan
      .white
  );
});

