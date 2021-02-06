import React from "react"

function BookCard() {
    const styles = {
        buttonMargin: {
            margin: "5px"
        }
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col">Title</div>

                <div className="col d-flex justify-content-end">
                    <button className="button  is-small is-primary is-outlined" style={styles.buttonMargin}>View</button>
                    <button className="button  is-small is-link is-outlined" style={styles.buttonMargin}>Save</button>
                </div>
            </div>
            <div className="row">
                <div className="col">second title</div>
            </div>
            <div className="row">
                <div className="col">author</div>
            </div>
            <div className="row">
                <div className="col-3">Image</div>
                <div className="col-9">description</div>
            </div>


        </div>


    )

}
export default BookCard


{/* <div>
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








</div> */}



//_____________________________________


{/* <div>
<div className="columns">
    <div className="column is-2">
        First column
    </div>
    <div className="column is-flex is-justify-content-flex-end is-narrow">
        <button className="button  is-small is-primary is-outlined" style={styles.buttonMargin}>View</button>
        <button className="button  is-small is-link is-outlined" style={styles.buttonMargin}>Save</button>
    </div>

</div>
<div className="columns">
    <div className="column">
        Title Two
    </div>

</div>
<div className="columns">
    <div className="column">
        Author
    </div>

</div>
<div className="columns">
    <div className="column is-one-third">
        Image
    </div>
    <div className="column ">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero accusantium, inventore ea, error odio architecto eveniet perferendis molestiae necessitatibus sunt quod optio eius alias deserunt adipisci. Dolor ad cupiditate amet quas est commodi? In modi atque nam dolor officia nobis ipsa, ipsum, dolores accusamus commodi exercitationem sapiente voluptas aut reprehenderit harum tempore reiciendis aliquid sunt iusto libero officiis. Architecto molestiae id sed molestias, porro perspiciatis beatae velit, pariatur repudiandae in enim. Fuga dignissimos, voluptatum ipsum praesentium, voluptates natus repellendus soluta quis aut, voluptatibus cupiditate sunt sit? Voluptatem ab fugiat odio sequi nisi, optio porro sed cumque saepe corrupti, vel possimus.
    </div>

</div> */}








