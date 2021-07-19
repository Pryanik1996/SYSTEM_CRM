const { Router } = require("express");
const router = Router();
const Client = require('../db/models/clientModel')


router.get("/card", async (req, res) => {
  try {
    const clients = await Client.find()
    res.json(clients)
  } catch(err) {
    console.log(err)
    res.sendStatus(404)
  }
})

router.post("/new", async (req, res) => {
  const { name } = req.body;
  // console.log(name)
  try {
    if (name) {
      // console.log('88888')
      const newClient = await Client.create(req.body);
      console.log(newClient)
      res.json(newClient)
    }
  } catch (err) {
    console.log(err)
    return res.sendStatus(403);
  }
});

router.get("/all", async (req, res) => {
  try {
    const allClients = await Client.find()
    res.json(allClients)
  } catch (err) {
    res.sendStatus(400)
  }

})

module.exports = router;
