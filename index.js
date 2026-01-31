import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new db.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "anup@1902",
  port: 5432
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
  
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
