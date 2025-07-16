const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const reviewRoutes = require("./routes/reviewRoutes");

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error("MongoDB connection error:", err));



app.get("/test", (req, res) => {
  res.send("Hello from server!");
});



// Routes
app.use("/api/reviews", reviewRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
