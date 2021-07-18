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
  const { name, surname, patronymic, email, phone, address} = req.body;
  const id = req.session.passport.user._id
  console.log(name)
  try {
    if (name) {
      const newClient = await Client.create({name, surname, patronymic, email, phone, address, creator: id});
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


router.patch("/:id", async (req, res) => {
  const {id} = req.params
  const {name, surname, patronymic, email, phone, address} = req.body
  const data = await Client.findByIdAndUpdate(id, {name, surname, patronymic, email, phone, address})
  const response = await Client.find({_id: id})
  await res.json(response)
})

router.get("/:id", async (req, res) => {
  const {id} = req.params
  try {
    const client = await Client.find({_id: id})
    console.log(client)
    res.json(client)
  }
  catch(err) {
    console.log(err)
  }
})

router.delete('/delete/:id', async (req, res) => {
  const {id} = req.params
  console.log(id, 'IDIDIDID')
  await Client.findByIdAndDelete(id)
  const client = await Client.find()
  res.json(client)
})


router.post("/:id", async (req, res) => {

  // const id = req.session.passport.user._id
  const cardId = req.params.id
  console.log(cardId, '000000')
  // try {
  //   if (name) {
  //     const newClient = await Client.create({name, surname, patronymic, email, phone, address, creator: id});
  //     res.json(newClient)
  //   }
  // } catch (err) {
  //   console.log(err)
  //   return res.sendStatus(403);
  // }
});
module.exports = router;
