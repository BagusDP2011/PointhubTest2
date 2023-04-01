const { Schema } = require("mongoose");
const mongoose = require("mongoose");
const Customer = require("./customer.model");

const invoiceSchema = new Schema({
  id: {
    type: String,
  },
  customer_id: {
    type: Schema.ObjectId,
    ref: 'Customer',
  },
  date: {
    type: String,
  },
  total: {
    type: String,
  },
});

// invoiceSchema.pre("save", async function (next) {
//   const customerData = await Customer.findOne({ name: "john" });
//   await Invoice.create({
//     customer: customerData,
//     date: "2023-01-01 15:00:00",
//     total: "500000",
//   });
//   next();
// });

const Order = mongoose.model("Order", invoiceSchema);

module.exports = Order;
