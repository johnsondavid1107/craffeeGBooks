import React from "react"

function BookCard(props) {
    const { title, author, picture, description } = props

    const styles = {
        buttonMargin: {
            margin: "5px"
        }
    }

    return (
        <div>
            <div className="columns">
                <div className="column">
                    {title}
                </div>
                <div className="column is-flex is-justify-content-flex-end">
                    <button className="button  is-small is-primary is-outlined" style={styles.buttonMargin}>View</button>
                    <button className="button  is-small is-link is-outlined" style={styles.buttonMargin}>Save</button>
                </div>

            </div>
            <div className="columns">
                <div className="column">
                    {author}
                </div>

            </div>
            <div className="columns">
                <div className="column">
                    Author
                </div>

            </div>
            <div className="columns">
                <div className="column is-one-third">
                    <img src={picture} alt="thumbnail book pic"></img>
                </div>
                <div className="column ">
                    {description}
                </div>

            </div>








        </div>
    )

}
export default BookCard