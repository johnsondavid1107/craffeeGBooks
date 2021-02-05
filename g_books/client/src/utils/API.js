/* eslint-disable import/no-anonymous-default-export */
import React from "react"
import axios from "axios"




export default {
    searchBooks: function (query) {

        return axios.get('/search/books')




    }
}