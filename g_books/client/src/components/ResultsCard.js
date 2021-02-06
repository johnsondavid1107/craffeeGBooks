import React from "react"
import BookCard from "./BookCard"

function ResultsCard(props) {
    const styles = {
        spaceResults: {
            marginBottom: "30px"
        }
    }
    console.log(props)
    return (

        <div>
            <div className="card" style={styles.spaceResults}>
                <div className="card-content">
                    <div className="content">
                        <p className="title is-3 is-flex">
                            Results
                    </p>
                        <BookCard />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResultsCard