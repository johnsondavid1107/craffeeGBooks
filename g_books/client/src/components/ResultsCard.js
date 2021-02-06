import React from "react"
import BookCard from "./BookCard"

function ResultsCard(props) {
    const styles = {
        spaceResults: {
            marginBottom: "30px"
        }
    }
    console.log(props.books)
    return (

        <div>
            <div className="card" style={styles.spaceResults}>
                <div className="card-content">
                    <div className="content">
                        <p className="title is-3 is-flex">
                            Results
                            
                        </p>
                        <hr></hr>


                    </div>

                </div>
                {props.books.map((book) => (
                    <BookCard
                        title={book.volumeInfo.title}
                        key={book.id}
                        author={book.volumeInfo.authors[0]|| book.volumeInfo.authors}
                        picture={book.volumeInfo.imageLinks.thumbnail}
                        description={book.volumeInfo.description}
                        subtitle={book.volumeInfo.subtitle}
                        pageCount={book.volumeInfo.pageCount}
                        link={book.volumeInfo.canonicalVolumeLink}
                    />
                ))}

            </div>
        </div>
    )
}

export default ResultsCard