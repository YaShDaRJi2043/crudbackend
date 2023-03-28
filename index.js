require("dotenv").config();

const express = require("express");
const app = express();

require("./db/conn");
const router = require("./routes/router");
const cors = require("cors");
const port = 5000;

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
