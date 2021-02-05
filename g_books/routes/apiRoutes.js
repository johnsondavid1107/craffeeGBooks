require("dotenv").config()
const axios = require('axios');

const APIKEY = process.env.REACT_APP_GOOGLE_BOOKS_API_KEY

const router = require('express').Router();

console.log(APIKEY, "line8")

router.get("/books", async (req, res) => {

    const query = req.query.q
    const URL = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=` + APIKEY

    console.log(URL)
    console.log(query)
    console.log(APIKEY)
    console.log(process.env.REACT_APP_GOOGLE_BOOKS_API_KEY)

    try {
        await axios.get(URL).then(data => {
            console.log(data.data)
            console.log("gottem")

            res.json(data.data)

        })
    } catch (err) {
        console.log(err)
    }

    //if i do res.send data outside of axios call, i get the console log of books, but cant send to frontend.. if place res.send inside axios call, i get circular json erro





})


module.exports = router;