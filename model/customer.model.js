const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const CustomerSchema = new Schema({
  name: {
    type: String,
  },
  phone: {
    type: String,
  },
});

// CustomerSchema.pre("save", async function (next) {
//   await Customer.create({
//     name: "john",
//     phone: "02112345678",
//   });
//   next();
// });

const Order = mongoose.model("Customer", CustomerSchema);

module.exports = Order;
