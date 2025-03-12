// Importazione del componente Link da react-router-dom
import { Link } from "react-router-dom"

// Definizione del componente NotFoundPage come funzione
export default function NotFoundPage() {
    return (
        <>
            {/* Contenitore principale della pagina non trovata */}
            <div className="not-found-container">
                {/* Contenitore del link per tornare alla homepage */}
                <div className="back-home-notfound">
                    {/* Link per tornare alla homepage */}
                    <Link to="/">Torna sulla Homepage</Link>
                </div>
            </div>
        </>
    )
}
