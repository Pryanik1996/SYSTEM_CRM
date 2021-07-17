const { Router } = require("express");
const router = Router();
const User = require("../db/models/userModel")

router.get('/workers', async (req,res)=>{
  const workers = await User.find()
  res.json(workers)
})

router.post("/workers/new", async (req, res) => {
  const { email } = req?.body;
  try {
    if (email) {
    const newUser = await User.create(req.body);
    res.json(newUser)
    }
  } catch (err) {
    return res.sendStatus(403);
  }
});
module.exports = router;
