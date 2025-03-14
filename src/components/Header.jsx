// Importazione del componente Link da react-router-dom
import { Link } from "react-router-dom"

// Definizione del componente Header come funzione
export default function Header() {
    return (
        <>
            <header className="bg-dark text-light py-3 shadow-sm">
                <div className="container d-flex justify-content-between align-items-center">
                    {/* Link al titolo dell'applicazione */}
                    <Link to="/" className="text-light text-decoration-none">
                        <h1 className="m-0 fw-bold">&#x1F3AC; Movies</h1>
                    </Link>

                    {/* Bottone stilizzato */}
                    <Link className="btn btn-outline-light px-4 rounded-pill" to="/movies/create">
                        &#x2795; Aggiungi Film
                    </Link>
                </div>
            </header>

        </>
    )
}
