require("dotenv").config()


const router = require('express').Router();

router.get("/books", function (req, res) {
    let message = "goodjob"
    res.send(message)

})


module.exports = router;