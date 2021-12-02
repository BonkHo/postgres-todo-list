const Pool = require("pg").Pool;
const { PASSWORD } = require("./config");

const pool = new Pool({
	user: "postgres",
	password: PASSWORD,
	host: "localhost",
	post: 5432,
	database: "perntodo",
});

module.exports = pool;
