const { Router } = require("express");
const router = Router();
const Client = require("../db/models/clientModel");


router.get("/new", async (req,res) => {
  Client.find()
    .then((data) => res.json(data))
    .catch((err) => res.sendStatus(404));
})


router.post("/new", async (req, res) => {
  const { name } = req.body;
  console.log(name)
  try {
    if (name) {
      console.log('88888')
    const newClient = await Client.create(req.body);
    console.log(newClient)
    res.json(newClient)
    }
  } catch (err) {
  console.log(err)
    return res.sendStatus(403);
  }
});

module.exports = router;
