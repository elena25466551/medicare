const router = require("express").Router();
const { getUsers, postUser } = require("../controllers/user.controllers");

router.get("/users", getUsers);
router.post("/user", postUser);

module.exports = router;