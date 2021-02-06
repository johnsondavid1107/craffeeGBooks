/* eslint-disable import/no-anonymous-default-export */

import axios from "axios"




export default {
    searchBooks: function (query) {
        console.log(query)


        return axios.get('/search/books', { params: { q: query } })




    },
    saveBooks: function (id) {
        return axios.get("/save/bookData"), { params: { q: id } }
    }
}