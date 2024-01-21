const express = require("express");

const {
  addAdmin,
  fetchAdmin,
  deleteAdmin,
  fetchOneAdmin,
  updateAdmin,
  loginAdmin,
} = require("../controllers/adminController");

const router = express.Router();

router.get("/", (req, res) => {
  res.json("Route Admin");
});

router.post("/addAdmin", addAdmin);

router.get("/fetchAdmin", fetchAdmin);

router.delete("/deleteAdmin", deleteAdmin);

router.post("/fetchOneAdmin", fetchOneAdmin);

router.patch("/updateAdmin", updateAdmin);

router.post("/login", loginAdmin);
module.exports = router;
