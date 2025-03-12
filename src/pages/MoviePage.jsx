// Importazione di axios per effettuare richieste HTTP
import axios from "axios"

// Importazione degli hook useState e useEffect da React
import { useState, useEffect } from "react"

// Importazione dei componenti Link, useNavigate e useParams da react-router-dom
import { Link, useNavigate, useParams } from "react-router-dom"

// Importazione del componente ReviewCard
import ReviewCard from "../components/ReviewCard"

// Definizione del componente MoviePage come funzione
export default function MoviePage() {
    // Estrazione del parametro id dalla URL
    const { id } = useParams();

    // Definizione della funzione di navigazione
    const redirect = useNavigate();

    // Definizione dello stato movie
    const [movie, setMovie] = useState({});

    // Funzione per recuperare i dati del film
    function fetchMovie() {
        // Effettua una richiesta GET all'API per ottenere i dati del film
        axios.get("http://localhost:3000/api/movies/" + id)
            .then(res => {
                // Imposta i dati del film nello stato
                setMovie(res.data)
            })
            .catch(err => {
                // Log degli errori
                console.log(err);
                // Se l'errore è 404, reindirizza alla pagina 404
                if (err.status === 404) redirect("/404")
            })
    }

    // Effettua il fetch dei dati del film quando il componente viene montato
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
                            // Mappa le recensioni del film e renderizza una ReviewCard per ciascuna
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
