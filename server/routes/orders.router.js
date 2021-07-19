const { Router } = require("express");
const router = Router();
const Order = require("../db/models/orderModel");
const Comment = require("../db/models/commentModel");

router.get("/new", (req, res) => {
  Order.find()
    .then((data) => res.json(data))
    .catch((err) => res.sendStatus(404));
});

router.post("/new", async (req, res) => {
  const { number } = req.body;
  // console.log(req.body);
  try {
    if (number) {
      const newOrder = await Order.create(req.body);
      res.json(newOrder);
    }
  } catch (err) {
    return res.sendStatus(403);
  }
});

//========= /orders

router.get("/all", async (req, res) => {
  try {
    const allOrders = await Order.find();
    res.json(allOrders);
  } catch (err) {
    res.sendStatus(400);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const currentOrder = await Order.findById(id).populate("comments");
    res.json(currentOrder);
  } catch (error) {
    return res.sendStatus(400);
  }
});
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Order.findByIdAndDelete(id);
    res.sendStatus(200);
  } catch (error) {
    return res.sendStatus(400);
  }
});
router.post("/:id", async (req, res) => {
  const { id } = req.params;
  const { comment, userName } = req.body;
  // console.log("333333=>>>", comment);
  let dat = new Date();
  let options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  let dateNow = dat.toLocaleString("ru-RU", options);
  try {
    const newComment = await Comment.create({
      author: userName,
      body: comment,
      date: dateNow,
    });
    const updOrder = await Order.findByIdAndUpdate(
      id,
      { $push: { comments: newComment._id } },
      { new: true }
    ).populate("comments");
    // console.log("updOrder=======>", updOrder);
    res.json({ newComment, updOrder });
  } catch (error) {
    console.log(error);
  }
});
// router.patch("/:id/comments", async (req, res) => {
//   const { id } = req.body;
//   console.log('12344444--->', id);
// });

module.exports = router;
