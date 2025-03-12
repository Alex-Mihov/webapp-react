// Importazione del componente Link da react-router-dom
import { Link } from "react-router-dom"

// Definizione del componente Header come funzione
export default function Header() {
    return (
        <>
            {/* Elemento header */}
            <header>
                {/* Link al titolo dell'applicazione */}
                <Link to="/">
                    {/* Titolo dell'applicazione */}
                    <h1>Movies</h1>
                </Link>
            </header>
        </>
    )
}
