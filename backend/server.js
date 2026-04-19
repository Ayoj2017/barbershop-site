const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());

// 🔗 Connect to MongoDB
// mongoose.connect("mongodb://127.0.0.1:27017/barbershop");

mongoose.connect(process.env.MONGO_URI);

const DataSchema = new mongoose.Schema({
  name: String,
  tagline: String,
  phone: String,
});

const Data = mongoose.model("Data", DataSchema);

// GET data
app.get("/api/data", async (req, res) => {
  let data = await Data.findOne();

  if (!data) {
    data = await Data.create({
      name: "SharpCuts Barbershop",
      tagline: "Clean cuts. Fast service.",
      phone: "2348000000000",
    });
  }

  res.json(data);
});

// UPDATE data
app.post("/api/data", async (req, res) => {
  let data = await Data.findOne();

  if (!data) {
    data = new Data(req.body);
  } else {
    data.name = req.body.name;
    data.tagline = req.body.tagline;
    data.phone = req.body.phone;
  }

  await data.save();
  res.json(data);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

