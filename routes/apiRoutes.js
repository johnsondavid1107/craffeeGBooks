require("dotenv").config()
const db = require("../models")
const axios = require('axios');

const APIKEY = process.env.REACT_APP_GOOGLE_BOOKS_API_KEY

const router = require('express').Router();

console.log(APIKEY, "line8")

router.get("/books", async (req, res) => {

    const query = req.query.q
    const URL = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=` + APIKEY
    console.log(URL)

    try {
        await axios.get(URL).then(data => {
            console.log(data.data)


            res.json(data.data)

        })
    } catch (err) {
        console.log(err)
    }



})
router.get("/bookData", (req, res) => {
    console.log(req.query.id)
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

router.get("/AllSaved", (req, res) => {
    db.BookUser.find({}).then(function (response) {
        res.json(response)
    })
})

router.get("/andDelete", (req, res) => {

    console.log(req.query.id)
    let id = req.query.id
    db.BookUser.findByIdAndDelete(id, function (err) {
        if (err) console.log(err);
        console.log("Delete Successful")
    })
})






module.exports = router;