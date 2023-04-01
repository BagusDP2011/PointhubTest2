/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
// db.getMongo().getDBs()

use("mongodbVSCodePlaygroundDB");

db.getCollection("customer").deleteMany({ id: "1" });
db.getCollection("invoice").deleteMany({ id: "1" });

// Insert a few documents into the sales collection.
db.getCollection("customer").insertOne(
  { id: "1", name: "john", phone: "02112345678" },
);
const customer = db.customer.findOne({ id: "1" });
console.log("customer : ", customer);
db.getCollection("invoice").insertOne(
  {
    id: "1",
    customer: { name: "john", phone: "02112345678" },
    date: "2023-01-01 15:00:00",
    total: "500000",
  },
);
const invoiceLog = db.invoice.findOne({ id: "1" });

// Run a find command to view items sold on April 4th, 2014.
console.log('log : ', invoiceLog);

// Print a message to the output window.
// console.log(`${salesOnApril4th} sales occurred in 2014.`);

// Here we run an aggregation and open a cursor to the results.
// Use '.toArray()' to exhaust the cursor to return the whole result set.
// You can use '.hasNext()/.next()' to iterate through the cursor page by page.
// db.getCollection("invoice").aggregate([
//   // Find all of the sales that occurred in 2014.
//   {
//     $match: { id: 1 },
//   },
// ]);

db.getCollection("invoice").find({
  id: "1",
});
