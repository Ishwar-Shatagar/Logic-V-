require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const apiRoutes = require("./routes/api");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", apiRoutes);

connectDB();

app.listen(5000, () => console.log("🚀 Server running on port 5000"));
