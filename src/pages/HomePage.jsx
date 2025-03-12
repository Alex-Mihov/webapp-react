// Importiamo axios per effettuare richieste HTTP
import axios from "axios";

// Importazione del componente MovieCard
import MovieCard from "../components/MovieCard";

// Importazione degli hook useEffect e useState da React
import { useEffect, useState } from "react";

// Definizione del componente HomePage come funzione
export default function HomePage() {

    // Definizione dello stato movies
    const [movies, setMovies] = useState([]);

    // Funzione per recuperare i dati dei film
    function fetchMovies() {
        // Effettua una richiesta GET all'API per ottenere i dati dei film
        axios.get("http://localhost:3000/api/movies")
            .then(res => {
                // Imposta i dati dei film nello stato
                setMovies(res.data)
            })
            .catch(err => console.log(err)) // Log degli errori
    }

    // Effettua il fetch dei dati dei film quando il componente viene montato
    useEffect(fetchMovies, []);

    return (
        <>
            {/* Contenitore principale delle card dei film */}
            <div className="card-container">
                {
                    // Mappa i film e renderizza una MovieCard per ciascuno
                    movies.map(movie => <MovieCard key={movie.id} movieProp={movie} />)
                }
            </div>
        </>
    )
}
