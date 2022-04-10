const express = require("express");
const { createAccount, getAccount, login } = require("./mongo");
require("dotenv").config({ path: ".env" });

const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body
    const loginSuccess = await login(username, password)

    res.send(loginSuccess)
  } catch (err) {
    console.error(err)
    res.sendStatus(500)
  }
});

module.exports = router;