const express = require("express");
const config = require("config");
const mongoose = require("mongoose");

const bodyParser = require("body-parser");

const app = express();

app.use(express.json({ extended: true }));
// use the middleware of bodyParser
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/feedback", require("./routes/feedback.routes"));
app.use("/api/works", require("./routes/works.routes"));

const PORT = config.get("port") || 5000;

async function start() {
  try {
    await mongoose.connect(config.get("mongoURI"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
  } catch (e) {
    console.log("Server Error", e.message);
    process.exit(1);
  }
}

start();

app.listen(5000, () => {
  console.log(`App has been started on port ${PORT}...`);
});
