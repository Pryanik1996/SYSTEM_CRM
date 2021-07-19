const { Router } = require("express");
const router = Router();
const User = require("../db/models/userModel");
const Clients = require("../db/models/clientModel");
const Orders = require("../db/models/orderModel");

router.get("/workers", async (req, res) => {
  // making look on admin
  const workers = await User.find();
  return res.json(workers);
});

// router.post("/workers/:id", async (req, res) => {
//   const {id:_id} = req.params
//   console.log(req.params);
//   try {
//       const nowAdmin = await User.findByIdAndUpdate(_id,{
//         isAdmin: !isAdmin });
//       console.log(nowAdmin);
//       res.json(nowAdmin)

//   } catch (err) {

//     return res.sendStatus(403);
//   }
// });

router.post("/workers/new", async (req, res) => {
  const { email } = req?.body;
  try {
    if (email) {
      const newUser = await User.create(req.body);
      return res.json(newUser);
    }
  } catch (err) {
    return res.sendStatus(403);
  }
});
router.get("/clients", async (req, res) => {
  const allDeletedClients = await Clients.find({ isDelete: true });
  return res.json(allDeletedClients);
});
router.delete("/clients/:id", async (req, res) => {
  await Clients.findByIdAndDelete(req.params.id);
  res.sendStatus(200);
});

router.get("/orders", async (req, res) => {
  const allDeletedOrders = await Orders.find({ isDelete: true });
  return res.json(allDeletedOrders);
});

router.delete("/orders/:id", async (req, res) => {
  await Orders.findByIdAndDelete(req.params.id);
  res.sendStatus(200);
});
module.exports = router;
