const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "India@11",
  host: "localhost",
  port: 5432,
  database: "perntodo"
});

module.exports = pool;