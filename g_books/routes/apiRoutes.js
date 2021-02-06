require("dotenv").config()
const db = require("../models")
const axios = require('axios');

const APIKEY = process.env.REACT_APP_GOOGLE_BOOKS_API_KEY

const router = require('express').Router();

console.log(APIKEY, "line8")

router.get("/books", async (req, res) => {

    const query = req.query.q
    const URL = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=` + APIKEY

    try {
        await axios.get(URL).then(data => {


            res.json(data.data)

        })
    } catch (err) {
        console.log(err)
    }



})
router.get("/bookData", (req, res) => {
    let bookStoreObject = JSON.parse(req.query.id)
    console.log(bookStoreObject)

    db.BookUser.create({
        title: bookStoreObject.title,
        description: bookStoreObject.description,
        id: bookStoreObject.id,
        link: bookStoreObject.link,
        pageCount: bookStoreObject.pageCount,
        picture: bookStoreObject.picture,
        subTitle: bookStoreObject.subtitle,
        author: bookStoreObject.author
    }).then()


})






module.exports = router;