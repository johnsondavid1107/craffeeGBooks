import React, { useState } from "react"
import API from "../utils/API"
import Search from "../pages/Search";

function SearchField() {

    const [find, setSearch] = useState('');

    const handleInput = (event) => {
        const { value } = event.target
        console.log(value)
        setSearch(value)
        //try changing the above to event.target.value to see if it is the same thing

    }


    const handleSearch = () => {
        // API.searchBooks().then(function (res) {
        //     console.log(res)
        // }).catch(err => console.log(err))

        API.searchBooks(find).then(function (res) {
            console.log(res)
        })
            .catch(err => console.log(err))
    }





    const styles = {
        inputField: {
            margin: "20px"
        },
        spaceResultsCard: {
            marginBottom: "50px"
        },
        spaceButton: {
            marginBottom: "20px"
        }
    }




    return (
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
    )


}
export default SearchField