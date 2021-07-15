const { Router } = require("express");
const router = Router();
const User = require("../db/models/userModel");

router.post("/new", async (req, res) => {
  const { name } = req.body;
  console.log(req.body)
  try {
    if (name) {
    const newUser = await User.create(req.body);
    res.json(newUser)
    }
  } catch (err) {
    return res.sendStatus(403);
  }
});

module.exports = router;
