/* eslint-disable import/no-anonymous-default-export */
import React from "react"
import axios from "axios"


export default {
    searchBooks: function () {
        const APIKey = 

        const URL = `https://www.googleapis.com/books/v1/volumes?q=potter&key=${APIKey}`

        return axios.get(URL)


    }
}