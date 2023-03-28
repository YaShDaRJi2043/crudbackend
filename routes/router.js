const express = require("express");
const router = express.Router();
const collection = require("../model/userSchema");

router.post("/addData", async (req, res) => {
  const { fname, lname } = req.body;
  console.log(fname, lname);
  try {
    if (!fname || !lname) {
      res.status(404).json({ status: 404, message: "Fill all the details" });
    } else {
      const data = new collection({
        fname,
        lname,
      });
      const finaldata = await data.save();
      res.status(201).json(finaldata);
    }
  } catch (error) {
    res.status(404).json({ status: 404, message: "Enter valid data" });
  }
});

router.get("/userData", async (req, res) => {
  try {
    const data = await collection.find();
    res.status(201).json(data);
  } catch (error) {
    res.status(404).json({ status: 404, message: "Data not get" });
  }
});

router.get("/indiUser/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const data = await collection.findById({ _id: id });
    res.status(201).json(data);
  } catch (error) {
    res.status(404).json({ status: 404, message: "Data not get" });
  }
});

router.put("/editUser/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const data = await collection.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.status(201).json(data);
  } catch (error) {
    res.status(404).json({ status: 404, message: "Data not get" });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const data = await collection.findByIdAndDelete({ _id: id });
    res.status(201).json(data);
  } catch (error) {
    res.status(404).json({ status: 404, message: "error" });
  }
});

module.exports = router;
