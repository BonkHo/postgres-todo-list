const Pool = require("pg").Pool;
const { PASSWORD } = require("./config.js");

const pool = new Pool({
	user: "postgres",
	password: "Illputt321",
	host: "localhost",
	post: 5432,
	database: "perntodo",
});

module.exports = pool;
