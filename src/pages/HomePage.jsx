// importiamo axios
import axios from "axios";

// Importazione del componente MovieCard
import MovieCard from "../components/MovieCard";
import { useEffect, useState } from "react";

// Definizione del componente HomePage come funzione
export default function HomePage() {

    // settiamo lo stato del componente
    const [movies, setMovies] = useState([]);

    // funzione fetch dei dati per la lista
    function fetchMovies() {
        axios.get("http://localhost:3000/api/movies")
            .then(res => {
                // console.log(res.data);
                setMovies(res.data)
            })
            .catch(err => console.log(err))
    }

    // fetchMovies();
    useEffect(fetchMovies, []);

    return (
        <>
            {/* Contenitore principale delle card dei film */}
            <div className="card-container">
                {
                    movies.map(movie => <MovieCard key={movie.id} movieProp={movie} />)
                }
            </div>
        </>
    )
}
