const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.listen(5000, () => {
	console.log("Server running on: http://localhost:5000");
});
