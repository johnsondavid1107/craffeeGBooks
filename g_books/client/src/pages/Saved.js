import React from "react"
import BookCard from "../components/BookCard"

function Saved() {
    const styles = {
        spaceResults: {
            marginBottom: "30px"
        }
    }

    return (
        <div>
            <div className="card" style={styles.spaceResults}>
                <div className="card-content">
                    <div className="content">
                        <p className="title is-3 is-flex">
                            Saved Books
                </p>

                    </div>
                </div>
            </div>
        </div>
    )


}
export default Saved