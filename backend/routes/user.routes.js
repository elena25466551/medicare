const router = require("express").Router();
const { getUsers } = require("../controllers/user.controllers");

router.get("/api", getUsers);

module.exports = router;