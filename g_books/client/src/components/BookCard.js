/* eslint-disable react/jsx-no-target-blank */
import React from "react"

function BookCard(props) {

    const { title, author, picture, description, subtitle, pageCount, link } = props
    const styles = {
        buttonMargin: {
            margin: "5px"
        },
        spaceCard: {
            marginBottom: "10px"
        }, addPadding: {
            padding: "10px"
        }
    }

    return (
        <div className="container">
            <div className="card" style={styles.spaceCard}>
                <div className="row" style={styles.addPadding}>
                    <div className="col"><strong>{title || "No Title Found.."} </strong> </div>

                    <div className="col-1 d-flex justify-content-end">
                        <a href={link} target="_blank"><button className="button  is-small is-primary is-outlined" style={styles.buttonMargin}>View</button></a>
                        <button className="button  is-small is-link is-outlined" style={styles.buttonMargin}>Save</button>
                    </div>
                </div>
                <div className="row" style={styles.addPadding}>
                    <div className="col">{subtitle}</div>
                </div>
                <div className="row" style={styles.addPadding}>
                    <div className="col">{author}</div>
                </div>
                <div className="row" style={styles.addPadding}>
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
export default BookCard









