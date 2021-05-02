const db = require("./db");
const Employee = require("./models/employee");
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const createEmployee = async () => {
  const newEmployee = await Employee.insertMany({
    first_name: "newtest",
    last_name: "person",
    email: "test4@test.com",
    job_title: "dev & tester",
    address: {
      street: "433 test",
      city: "New York",
      state: "NY",
      zip: 11212,
    },
  });
  console.log("New employee created  ", newEmployee);
};
const updatingEmployee = async () => {
  const newUpdatee = await Employee.updateMany(
    { name: "Naeem" },
    { $set: { email: " test554@test.com" } }
  );
  console.log("New email updated ", newUpdatee);
};

const deletingEmployee = async () => {
  const deleteOneEmployee = await Employee.deleteMany({
    name: "Sleep",
  });
  console.log(" deleted it one employee  ", deleteOneEmployee);
};
const findAllEmployee = async () => {
  const allEmployee = await Employee.find();
  console.log("all Employee ", allEmployee);
};

const run = async () => {
  await createEmployee();
  await updatingEmployee();
  await deletingEmployee();
  await findAllEmployee();

  db.close();
};
run();
