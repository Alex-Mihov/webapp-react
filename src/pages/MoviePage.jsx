import ReviewCard from "../components/ReviewCard"
import { Link } from "react-router-dom"

export default function MoviePage() {
    return (
        <>
            <div className="container-movie-page">
                <div className="movie-page">
                    <div className="movie-details">
                        <h3 className="movie-title">Titolo Film</h3>

                        <img
                            className="movie-image"
                            src="http://localhost:3000/img/movies_cover/inception.jpg"
                            alt="Descrizione dell'immagine"
                        />

                        <span className="movie-author">Nome Autore</span>

                        <p className="movie-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, pariatur eaque culpa cum voluptates fugiat beatae illum vero illo dolorem ipsum assumenda odio consectetur molestiae. Nemo cum unde ex porro!
                        </p>
                    </div>

                    <div className="reviews-section">
                        <ReviewCard />
                        <ReviewCard />
                        <ReviewCard />
                    </div>

                    <div className="back-home">
                        <Link to="/">Torna sulla Homepage</Link>
                    </div>
                </div>
            </div>


        </>
    )
}
