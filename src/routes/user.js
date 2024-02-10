const express = require("express");
const router = express.Router();
router.post("/users", (req, res) => {
  res.send("crear users");
});
module.exports = router;
