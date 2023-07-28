const express = require("express");
const cors = require("cors")
const app = express();
app.use(cors())
const data=require("./data.json")

const port = process.env.PORT || 8000



app.get("/", (req, res) => {
  res.send(data);
});


app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});