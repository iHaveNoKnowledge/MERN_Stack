const express = require("express");
const router = express.Router();
const { create, save } = require("../controller/blogController");
console.log("หน้าตาเป็นแบบนี้: ", require("../controller/blogController"));

router.post("/create", create);
router.get("/save", save);

module.exports = router;
