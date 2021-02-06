require("dotenv").config()
const axios = require('axios');

const APIKEY = process.env.REACT_APP_GOOGLE_BOOKS_API_KEY

const router = require('express').Router();

console.log(APIKEY, "line8")

router.get("/books", async (req, res) => {

    const query = req.query.q
    const URL = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=` + APIKEY

    try {
        await axios.get(URL).then(data => {
            console.log(data.data)
            console.log("gottem")

            res.json(data.data)

        })
    } catch (err) {
        console.log(err)
    }



})
router.get("/bookData", async (req, res) => {

    const query = req.query.id
    const URL = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=` + APIKEY

    try {
        await axios.get(URL).then(data => {
            console.log(data.data)
            console.log("gottem")

            res.json(data.data)

        })
    } catch (err) {
        console.log(err)
    }



})

router.get("toDatabase"), function (req, res) {
    console.log(req)
}



//Yow9AAAAYAAJ

module.exports = router;