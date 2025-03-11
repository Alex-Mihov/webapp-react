import { Link } from "react-router-dom"

export default function MovieCard() {
    return (
        <>
            <div className="card">
                <img
                    src="http://localhost:3000/img/movies_cover/inception.jpg"
                    alt="descrizione img" />

                <div className="card-content">
                    <h5>
                        Titolo del film
                    </h5>
                </div>
            </div>
        </>
    )
}
