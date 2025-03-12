// Importazione del componente Link da react-router-dom
import { Link } from "react-router-dom"

// Definizione del componente MovieCard come funzione
export default function MovieCard(props) {

    // Estrazione delle proprietà id, title, director, abstract e image da props.movieProp
    const { id, title, director, abstract, image } = props.movieProp;

    return (
        <>
            {/* Contenitore principale della card */}
            <div className="card mb-3 d-flex flex-column" style={{ maxWidth: "540px", height: "300px" }}>
                {/* Contenitore della riga della card */}
                <div className="row g-0 h-100">
                    {/* Colonna per l'immagine */}
                    <div className="col-md-4 h-100">
                        {/* Immagine del film */}
                        <img
                            src={image}
                            className="img-fluid rounded-start h-100 w-100"
                            alt={title}
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                    {/* Colonna per i dettagli del film */}
                    <div className="col-md-8 d-flex flex-column h-100">
                        {/* Corpo della card */}
                        <div className="card-body flex-grow-1">
                            {/* Titolo del film */}
                            <h5 className="card-title">{title}</h5>
                            {/* Nome del regista */}
                            <p className="card-text"><small className="text-body-secondary">{director}</small></p>
                            {/* Abstract del film */}
                            <p className="card-text text-truncate" style={{ maxHeight: "100px", overflow: "hidden" }}>
                                {abstract}
                            </p>
                        </div>
                        {/* Contenitore del link per vedere i dettagli */}
                        <div className="mt-auto text-end p-2">
                            {/* Link per vedere i dettagli del film */}
                            <Link to={`movies/${id}`} className="btn btn-primary btn-sm text-white text-decoration-none">
                                Vedi altro
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
