import React, { useState } from "react"
import API from "../utils/API"
import ResultsCard from "./ResultsCard"


function SearchField() {

    const [find, setSearch] = useState('');
    const [booksInfo, setBookInfo] = useState([])

    const handleInput = (event) => {
        const { value } = event.target
        console.log(value)
        setSearch(value)
        //try changing the above to event.target.value to see if it is the same thing

    }


    const handleSearch = () => {
        API.searchBooks(find).then(function (res) {
            console.log(res.data.items)
            setBookInfo(res.data.items)

        }).catch(err => console.log(err))
    }





    const styles = {
        inputField: {
            padding: "20px",
            marginBottom: "10px"
        },
        spaceResultsCard: {
            marginBottom: "50px"
        },
        spaceButton: {
            marginBottom: "20px"
        }
    }




    return (
        <div className="container">
            <div className="card" style={styles.spaceResultsCard} >
                <div className="card-content">
                    <div className="content">
                        <p className="title is-5 is-flex">
                            Book Search
                     </p>
                        <input className="input is-danger" type="text" placeholder="Search for your books here!" style={styles.inputField} onChange={handleInput} value={find}></input>
                        <button className="button is-pulled-right is-success is-outlined " style={styles.spaceButton} onClick={handleSearch}>Search!</button>
                    </div>
                </div>
            </div>
            <ResultsCard books={booksInfo} />
        </div>
    )


}
export default SearchField