// Importazione di axios per effettuare richieste HTTP
import axios from "axios"

// Importazione degli hook useState e useEffect da React
import { useState, useEffect } from "react"

// Importazione dei componenti Link, useNavigate e useParams da react-router-dom
import { Link, useNavigate, useParams } from "react-router-dom"

// Importazione del componente ReviewCard
import ReviewCard from "../components/ReviewCard"

// Importazione del componente ReviewForm
import ReviewForm from "../components/ReviewForm"

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
            <div className="container mt-5">
                <div className="row">
                    {/* Sezione dei dettagli del film */}
                    <div className="col-lg-8">
                        <div className="card bg-dark text-light mb-4">
                            <div className="card-body">
                                <h3 className="card-title text-white">{movie.title}</h3>

                                {/* Immagine del film con altezza fissa */}
                                <img
                                    className="img-fluid rounded mb-3"
                                    src={movie.image}
                                    alt={movie.title}
                                    style={{ height: '300px', objectFit: 'cover' }} // Altezza fissa
                                />

                                {/* Nome dell'autore del film */}
                                <h5 className="text-muted">Diretto da: {movie.director}</h5>

                                {/* Descrizione del film */}
                                <p className="card-text">{movie.abstract}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sezione delle recensioni sotto la parte del film */}
                <div className="row">
                    <div className="col-lg-8">
                        <div className="card bg-dark text-light mb-4">
                            <div className="card-header">
                                <h5 className="text-white">Recensioni</h5>
                            </div>
                            <div className="card-body">
                                {
                                    movie.reviews?.map(review => (
                                        <ReviewCard key={review.id} reviewProp={review} />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>

                {/* Form per aggiungere una nuova recensione */}
                <div className="card bg-dark text-light mb-4">
                    <div className="card-body">
                        <ReviewForm movie_id={movie.id} reloadReviews={fetchMovie} />
                    </div>
                </div>

                {/* Link per tornare alla homepage */}
                <div className="text-center mt-4">
                    <Link to="/" className="btn btn-outline-light">Torna sulla Homepage</Link>
                </div>
            </div>

        </>
    )
}
