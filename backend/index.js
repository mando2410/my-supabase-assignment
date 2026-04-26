require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { createClient } = require("@supabase/supabase-js");

const app = express();
app.use(cors());
app.use(express.json());

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

// test
app.get("/", (req, res) => {
  res.send("API is running");
});

// get students
app.get("/students", async (req, res) => {
  const { data, error } = await supabase.from("students").select("*");
  res.json(data);
});

// add student
app.post("/students", async (req, res) => {
  const { name, email } = req.body;

  const { data, error } = await supabase
    .from("students")
    .insert([{ name, email }]);

  res.json(data);
});

app.listen(3000, () => console.log("Server running"));