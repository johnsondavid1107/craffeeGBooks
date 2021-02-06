const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new mongoose.Schema({

    title: {
        type: String
    },
    bookID: {
        type: String
    },
    author: {
        type: Array
    },
    description: {
        type: String
    }, 
    link: {
        type: String
    },
    pageCount: {
        type: Number
    },
    picture: {
        type: String
    },
    subTitle: {
        type: String
    }












})

const BookUser = mongoose.model("bookuser", bookSchema);

module.exports = BookUser