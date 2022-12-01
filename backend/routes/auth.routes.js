const router = require("express").Router();
const { logIn } = require("../controllers/auth.controllers");

router.post("/login", logIn);

module.exports = router;