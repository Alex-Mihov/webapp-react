// Importazione del componente MovieCard
import MovieCard from "../components/MovieCard"

// Definizione del componente HomePage come funzione
export default function HomePage() {
    return (
        <>
            {/* Contenitore principale delle card dei film */}
            <div className="card-container">
                {/* Renderizza le card dei film */}
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
            </div>
        </>
    )
}
