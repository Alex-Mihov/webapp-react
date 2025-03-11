import { Link } from "react-router-dom"

export default function MovieCard() {
    return (
        <>
            <div className="card">
                <img
                    src="http://localhost:3000/img/movies_cover/inception.jpg"
                    alt="descrizione img" />

                <div className="card-content">
                    <h4>
                        Titolo del film
                    </h4>

                    <span>
                        Nome autore
                    </span>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, pariatur eaque culpa cum voluptates fugiat beatae illum vero illo dolorem ipsum assumenda odio consectetur molestiae. Nemo cum unde ex porro!
                    </p>

                    <Link to="movies/1">Vedi altro</Link>
                </div>
            </div>
        </>
    )
}
