const express = require('express');
const {home, Dummy } = require( '../controllers/home' );
const router = express.Router();

// router.get("/",home)
router.route("/").get(home)
router.route("/d").get(Dummy)


module.exports = router;