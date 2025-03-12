import axios from "axios"

import { useState, useEffect } from "react"

import { Link, useNavigate, useParams } from "react-router-dom"

import ReviewCard from "../components/ReviewCard"


export default function MoviePage() {

    const { id } = useParams();

    const redirect = useNavigate();

    const [movie, setMovie] = useState({});

    function fetchMovie() {
        axios.get("http://localhost:3000/api/movies/" + id)
            .then(res => {
                setMovie(res.data)
            })
            .catch(err => console.log(err))
    }

    useEffect(fetchMovie, []);

    return (
        <>
            {/* Contenitore principale della pagina del film */}
            <div className="container-movie-page">
                <div className="movie-page">
                    {/* Sezione dei dettagli del film */}
                    <div className="movie-details">
                        <h3 className="movie-title">{movie.title}</h3>

                        {/* Immagine del film */}
                        <img
                            className="movie-image"
                            src={movie.image}
                            alt={movie.title}
                        />

                        {/* Nome dell'autore del film */}
                        <span className="movie-author">{movie.director}</span>

                        {/* Descrizione del film */}
                        <p className="movie-description">
                            {movie.abstract}
                        </p>
                    </div>

                    {/* Sezione delle recensioni */}
                    <div className="reviews-section">
                        {
                            movie.reviews?.map(
                                review => <ReviewCard key={review.id} reviewProp={review} />
                            )
                        }
                    </div>

                    {/* Link per tornare alla homepage */}
                    <div className="back-home">
                        <Link to="/">Torna sulla Homepage</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
