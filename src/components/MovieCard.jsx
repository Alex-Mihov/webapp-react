import { Link } from "react-router-dom"

export default function MovieCard() {
    return (
        <>
            <div className="card">
                <div className="card-image">
                    <img src="http://localhost:3000/img/movies_cover/inception.jpg" alt="descrizione img" />
                </div>

                <div className="card-content">
                    <h4>Titolo del film</h4>
                    <span>Nome autore</span>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, pariatur eaque culpa cum voluptates fugiat beatae illum vero illo dolorem ipsum assumenda odio consectetur molestiae. Nemo cum unde ex porro! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident minima quibusdam, at ad quia officia dolores ducimus iure maiores, id quos unde commodi adipisci, mollitia beatae eligendi quidem! Voluptatum, eligendi!
                    </p>
                </div>

                <div className="bottone-dettaglio">
                    <Link to="movies/1">Vedi altro</Link>
                </div>
            </div>

        </>
    )
}
