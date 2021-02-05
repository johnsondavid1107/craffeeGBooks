/* eslint-disable import/no-anonymous-default-export */
import React from "react"
import axios from "axios"




export default {
    searchBooks: function (query) {
        console.log(query)


        return axios.get('/search/books', { params: { q: query } }).then(data => {
            console.log(data.data.items)
        })




    }
}