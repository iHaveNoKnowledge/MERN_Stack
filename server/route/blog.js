const express = require("express");
const router = express.Router();
const { create, yes } = require("../controller/blogController");
console.log("หน้าตาเป็นแบบนี้: ", require("../controller/blogController"));

router.get("/blog", create);
router.get("/yes", yes);

module.exports = router;
