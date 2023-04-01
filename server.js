const express = require("express");
const mongoose = require("mongoose");
const invoiceController = require("./controller/invoice.controller");

const app = express();
app.use(express.json());

// Database connection
mongoose.connect("mongodb://127.0.0.1:27017/mongodbVSCodePlaygroundDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

// list of routes
app.route("/invoice").get(invoiceController.getInvoice);

app.listen(3000, () => {
  console.log("Server is running at port 3000");
});
