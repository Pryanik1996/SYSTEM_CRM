const { Router } = require("express");
const router = Router();
const Order = require("../db/models/orderModel");

router.get("/new", (req,res) => {
  Order.find()
    .then((data) => res.json(data))
    .catch((err) => res.sendStatus(404));
})


router.post("/new", async (req, res) => {
  const { number, typeFurn, priceFurn, priceDeliv, dateDeliv, priceConstr, dateConstr, teamDeliv, teamConstr, status, commentsWhenCreate } = req.body;
  const id = req.session.passport.user._id
  try {
    if (number) {
    const newOrder = await Order.create({number, typeFurn, priceFurn, priceDeliv, dateDeliv, priceConstr, dateConstr, teamDeliv, teamConstr, status, commentsWhenCreate, creator: id });
    res.json(newOrder)
    }
  } catch (err) {
    return res.sendStatus(403);
  }
});

module.exports = router;
