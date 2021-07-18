const { Router } = require("express");
const router = Router();
const Order = require("../db/models/orderModel");

router.get("/new", (req,res) => {
  Order.find()
    .then((data) => res.json(data))
    .catch((err) => res.sendStatus(404));
})


router.post("/new", async (req, res) => {
  const { number } = req.body;
  console.log(req.body)
  try {
    if (number) {
    const newOrder = await Order.create(req.body);
    res.json(newOrder)
    }
  } catch (err) {
    return res.sendStatus(403);
  }
});

//========= /orders

router.get("/all", async (req, res) => {
  try {
    const allOrders = await Order.find()
    res.json(allOrders)
  } catch (err) {
    res.sendStatus(400)
  }
})

module.exports = router;
