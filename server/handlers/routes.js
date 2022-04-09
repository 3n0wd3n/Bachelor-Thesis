const express = require("express");
const { createAccount, getAccount, login } = require("./mongo");
require("dotenv").config({ path: ".env" });

const router = express.Router();

router.post("/login", async (req, res) => {
  const { username, password } = req.body
  const loginSuccess = await login(username, password)
  
  res.send(loginSuccess)
});

module.exports = router;