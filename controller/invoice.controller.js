const Invoice = require("../model/invoice.model");
const Customer = require("../model/customer.model");

const getInvoice = async (req, res) => {
  try {
    await Customer.create({
      name: "john",
      phone: "02112345678",
    });

    const customerData = await Customer.findOne({ name: "john" });

    await Invoice.create({
      customer: customerData,
      date: "2023-01-01 15:00:00",
      total: "500000",
    });

    const result = await Invoice.findOne({
      id: "1",
    });
    res.send(result);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getInvoice,
};
