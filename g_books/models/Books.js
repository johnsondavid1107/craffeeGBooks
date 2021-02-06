const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new mongoose.Schema({

    title: {
        type: String
    },
    bookID: {
        type: Number
    }











})

const BookUser = mongoose.model("bookuser", bookSchema);

module.exports = BookUser