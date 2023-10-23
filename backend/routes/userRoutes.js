const express = require("express")
const { userRegister, userLogin } = require("../controllers/users")

const router = express.Router()

router.route("/user/signup").post(userRegister)
router.route("/user/login").post(userLogin)

module.exports = router;
