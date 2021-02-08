import React from "react"


function MainCard() {
    const styles = {
        topCard: {
            marginTop: "30px",
            marginBottom: "100px"
        },
        contentMargin: {
            marginTop: "20px",
            marginBottom: "20px"
        }
    }
    return (
        <div>
            <div className="card" style={styles.topCard}>
                <div className="card-content" >
                    <div className="content" style={styles.contentMargin}>
                        <p className="title is-1 is-flex is-justify-content-center text-center">
                            Google Book Search!
                    </p>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default MainCard