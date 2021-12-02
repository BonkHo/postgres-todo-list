const express = require("express");
const cors = require("cors");

const app = express();
const pool = require("./db");

// Middleware
app.use(cors());
app.use(express.json());

// Routes
// create todo
app.post("/todos", async (req, res) => {
	// await
	try {
		const { description } = req.body;
		const newTodo = await pool.query(
			"INSERT INTO todo (description) VALUES($1) RETURNING *",
			[description]
		);
		res.json(newTodo.rows[0]);
	} catch (err) {
		console.error(err.message);
		res.status(500).send("Server Error");
	}
});
// get all todos
app.get("/todos", async (req, res) => {
	try {
		const allTodos = await pool.query("SELECT * FROM todo");
		res.json(allTodos.rows);
	} catch {
		console.error(err.message);
		res.status(500).send("Server Error");
	}
});
// get todo by id
// update todo
// delete todo

app.listen(5000, () => {
	console.log("Server running on: http://localhost:5000");
});
