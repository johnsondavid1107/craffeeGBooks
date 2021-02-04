import React from "react"

function Card() {
    const styles = {
        topCard: {
            marginTop: "30px",
            marginBottom: "100px"
        }
    }
    return (
        <div>
            <div className="card">
                <div className="card-content" style={styles.topCard}>
                    <div className="content">
                        <p className="title is-1 is-flex is-justify-content-center">
                            Google Books API
                    </p>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Card