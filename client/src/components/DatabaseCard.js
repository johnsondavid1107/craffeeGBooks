import React from "react"
import API from "../utils/API"


function DatabaseCard(props) {
    const { title, author, picture, description, subtitle, pageCount, id } = props
    const styles = {
        buttonMargin: {
            marginTop: "10px",
            marginRight: "10px"
        },
        spaceCard: {
            marginBottom: "10px"
        }, addMargin: {
            margin: "10px"
        }
    }

    const handleClick = () => {
        API.deleteBook(id)
        alert("Successfully Deleted")
        window.location.reload(true)
    }


    return (
        <div className="container">
            <div className="card" style={styles.spaceCard}>
                <div className="row" style={styles.addPadding}>

                    <div className="col d-flex justify-content-end">
                        <button className="button is-small is-danger is-outlined" style={styles.buttonMargin} onClick={handleClick} value={id}>Delete</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col" style={styles.addMargin}><strong>{title || "No Title Found.."} </strong> </div>
                </div>
                <div className="row" style={styles.addMargin}>
                    <div className="col">{subtitle}</div>
                </div>
                <div className="row" style={styles.addMargin}>
                    <div className="col">{author}</div>
                </div>
                <div className="row" style={styles.addMargin}>
                    <div className="col-3"><img src={picture || "No Image found..."} alt="book "></img></div>
                    <div className="col-9">{description || "No book description found..."}</div>
                </div>
                <div className="row">
                    <div className="col-11 text-right" style={styles.addPadding}>
                        Total Pages: {pageCount}
                    </div>
                </div>


            </div>
        </div>
    )


}

export default DatabaseCard

