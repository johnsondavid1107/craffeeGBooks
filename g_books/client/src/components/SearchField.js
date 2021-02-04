import React from "react"

function SearchField() {
    const styles = {
        inputField: {
            margin: "20px"
        }
    }

    return (
        <div className="card">
            <div className="card-content">
                <div className="content">
                    <p className="title is-5 is-flex">
                        Book Search
                     </p>
                    <input className="input is-danger" type="text" placeholder="Search for your books here!" style={styles.inputField}></input>
                    <button className="button is-pulled-right is-success is-outlined ">Outlined</button>
                </div>
            </div>
        </div>
    )
}
export default SearchField