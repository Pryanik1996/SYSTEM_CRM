const { Router } = require("express");
const router = Router();
const Order = require("../db/models/orderModel");

router.get("/new", (req, res) => {
  Order.find()
    .then((data) => res.json(data))
    .catch((err) => res.sendStatus(404));
});

router.post("/new", async (req, res) => {
  const { number } = req.body;
  console.log(req.body);
  try {
    if (number) {
      const newOrder = await Order.create(req.body);
      res.json(newOrder);
    }
  } catch (err) {
    return res.sendStatus(403);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const currentOrder = await Order.findById(id);
    res.json(currentOrder);
  } catch (error) {
    return res.sendStatus(400);
  }
});

module.exports = router;
