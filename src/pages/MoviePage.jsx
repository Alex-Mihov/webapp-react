import axios from "axios"

import { useState, useEffect } from "react"

import { Link, useNavigate, useParams } from "react-router-dom"

import ReviewCard from "../components/ReviewCard"


export default function MoviePage() {

    const { id } = useParams();

    const redirect = useNavigate();

    const [movie, setMovie] = useState({});

    return (
        <>
            {/* Contenitore principale della pagina del film */}
            <div className="container-movie-page">
                <div className="movie-page">
                    {/* Sezione dei dettagli del film */}
                    <div className="movie-details">
                        <h3 className="movie-title">Titolo Film</h3>

                        {/* Immagine del film */}
                        <img
                            className="movie-image"
                            src="http://localhost:3000/img/movies_cover/inception.jpg"
                            alt="Descrizione dell'immagine"
                        />

                        {/* Nome dell'autore del film */}
                        <span className="movie-author">Nome Autore</span>

                        {/* Descrizione del film */}
                        <p className="movie-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, pariatur eaque culpa cum voluptates fugiat beatae illum vero illo dolorem ipsum assumenda odio consectetur molestiae. Nemo cum unde ex porro!
                        </p>
                    </div>

                    {/* Sezione delle recensioni */}
                    <div className="reviews-section">
                        <ReviewCard />
                        <ReviewCard />
                        <ReviewCard />
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
