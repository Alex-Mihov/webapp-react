// Importazione del componente Link da react-router-dom
import { Link } from "react-router-dom"

// Definizione del componente MovieCard come funzione
export default function MovieCard() {
    return (
        <>
            {/* Contenitore principale della card */}
            <div className="card">
                {/* Contenitore dell'immagine della card */}
                <div className="card-image">
                    {/* Immagine del film */}
                    <img src="http://localhost:3000/img/movies_cover/inception.jpg" alt="descrizione img" />
                </div>

                {/* Contenitore del contenuto della card */}
                <div className="card-content">
                    {/* Titolo del film */}
                    <h4>Titolo del film</h4>
                    {/* Nome dell'autore del film */}
                    <span>Nome autore</span>
                    {/* Descrizione del film */}
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, pariatur eaque culpa cum voluptates fugiat beatae illum vero illo dolorem ipsum assumenda odio consectetur molestiae. Nemo cum unde ex porro! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident minima quibusdam, at ad quia officia dolores ducimus iure maiores, id quos unde commodi adipisci, mollitia beatae eligendi quidem! Voluptatum, eligendi!
                    </p>
                </div>

                {/* Contenitore del bottone per vedere i dettagli */}
                <div className="bottone-dettaglio">
                    {/* Link per vedere i dettagli del film */}
                    <Link to="movies/1">Vedi altro</Link>
                </div>
            </div>
        </>
    )
}
