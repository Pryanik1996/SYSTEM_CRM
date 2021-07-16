const { Router } = require("express");
const router = Router();
const User = require("../db/models/userModel")

router.get('/workers', async (req,res)=>{
  const workers = await User.find()
  console.log(workers);
})

router.post("/workers/new", async (req, res) => {
  const { email } = req.body;
  console.log(req.body);
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
