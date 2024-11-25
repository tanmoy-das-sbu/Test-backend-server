const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
  res.send("Godaddy Backend Testing");
});

app.listen(8000, () => {
  console.log(`Server is running at port: 8000`);
});


module.exports = app;
