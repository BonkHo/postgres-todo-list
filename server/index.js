const express = require("express");
const cors = require("cors");

const app = express();
const pool = require("./db");

// Middleware
app.use(cors());
app.use(express.json());

// Routes
// create todo
// get all todos
// get todo by id
// update todo
// delete todo

app.listen(5000, () => {
	console.log("Server running on: http://localhost:5000");
});
