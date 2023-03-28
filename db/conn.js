const mongoose = require("mongoose");

mongoose
  .connect(process.env.DATABASE, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("connected"))
  .catch((error) => {
    console.log("error" + error.message);
  });
