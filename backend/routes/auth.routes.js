const router = require("express").Router();
const { logIn } = require("../controllers/auth.controllers");

router.get("/login", logIn);

module.exports = router;