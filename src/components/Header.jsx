import { Link } from "react-router-dom"

// Definizione del componente Header come funzione
export default function Header() {
    return (
        <>
            {/* Elemento header */}
            <header>
                {/* Titolo dell'applicazione */}
                <Link to="/">
                    <h1>Movies</h1>
                </Link>

            </header>
        </>
    )
}
