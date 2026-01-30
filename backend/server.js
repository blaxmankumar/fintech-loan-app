require("dotenv").config();
const express = require("express");
const cors = require("cors");
const pool = require("./db");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/user", async (req, res) => {
  const result = await pool.query("SELECT * FROM users LIMIT 1");
  res.json(result.rows[0]);
});

app.get("/api/loan", async (req, res) => {
  const result = await pool.query("SELECT * FROM loans LIMIT 1");
  res.json(result.rows[0]);
});

app.listen(5000, () => {
  console.log("Backend running on port 5000");
});
