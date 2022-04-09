const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config({ path: ".env" });

const router = require("./handlers/routes");

// Mongo database
mongoose.connect(process.env.MONGOOSE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

// Express
const app = express();

app.use(
  cors({
    credentials: true,
    origin: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", router);

const server = require("http").createServer(app);

const PORT = process.env.PORT;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
