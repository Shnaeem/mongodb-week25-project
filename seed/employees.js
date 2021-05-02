const db = require("../db");
const Employee = require("../models/employee");

db.on("error", console.error.bind(console, "MongoDB connection error"));

const main = async () => {
  const employees = [
    {
      first_name: "Naeem",
      last_name: "shafi",
      email: "Test@test.com",
      job_title: "web dve",
      address: {
        street: "testing state ny",
        city: "New York",
        state: "NY",
        zip: 11218,
      },
    },
    {
      first_name: "alyaan",
      last_name: "Naeem",
      email: "test2@test.com",
      job_title: "Engineer",
      address: {
        street: "testing2 state ny",
        city: "New York",
        state: "NY",
        zip: 11218,
      },
    },
    {
      first_name: "Sleep ",
      last_name: "Now",
      email: "test2@test.com",
      job_title: "Developer",
      address: {
        street: "495 quens",
        city: "New York",
        state: "NY",
        zip: 11763,
      },
    },
  ];

  await Employee.insertMany(employees);
  console.log("New Employees Created");
};

const run = async () => {
  await main();
  db.close();
};

run();
