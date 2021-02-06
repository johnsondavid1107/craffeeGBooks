import React from "react"
import DatabaseCard from "../components/DatabaseCard"
import API from "../utils/API"
import BookCard from "../components/BookCard"


class Saved extends React.Component {

    state = {
        books: []
    }

    componentDidMount() {
        API.findBooks().then(response =>
            this.setState({
                books: response.data
            })

        )

    }


    render() {
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

                    {this.state.books.map(entry => (
                        <BookCard
                            title={entry.title}
                            key={entry.id}
                            author={entry.author}
                            picture={entry.picture}
                            description={entry.description}
                            subtitle={entry.subtitle}
                            pageCount={entry.pageCount}
                            link={entry.link}
                            id={entry.id}

                        />
                    ))}
                </div>
            </div >
        )

    }
}
export default Saved