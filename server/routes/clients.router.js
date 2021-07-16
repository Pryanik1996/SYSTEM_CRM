const { Router } = require("express");
const router = Router();
const Client = require("../db/models/clientModel");

router.get("/new", async (req, res) => {
  Client.find()
    .then((data) => res.json(data))
    .catch((err) => res.sendStatus(404));
});

router.post("/new", async (req, res) => {
  const { name } = req.body;
  try {
    if (name) {
      const newUser = await Client.create(req.body);
      res.json(newUser);
    }
  } catch (err) {
    return res.sendStatus(403);
  }
});

module.exports = router;
