// Importazione del componente Link da react-router-dom
import { Link } from "react-router-dom"

// Definizione del componente MovieCard come funzione
export default function MovieCard(props) {

    // Estrazione delle proprietà id, title, director, abstract e image da props.movieProp
    const { id, title, director, abstract, image } = props.movieProp;

    return (
        <>
            <div className="card mb-3 d-flex flex-column shadow-sm rounded bg-dark text-light" style={{ width: "540px", height: "300px" }}>
                {/* Contenitore della riga della card */}
                <div className="row g-0 h-100">
                    {/* Colonna per l'immagine */}
                    <div className="col-md-4 h-100">
                        {/* Immagine del film */}
                        <img
                            src={image}
                            className="img-fluid rounded-start h-100 w-100"
                            alt={title}
                            style={{ objectFit: "cover", height: "100%", borderTopLeftRadius: "0.25rem", borderBottomLeftRadius: "0.25rem" }}
                        />
                    </div>
                    {/* Colonna per i dettagli del film */}
                    <div className="col-md-8 d-flex flex-column h-100">
                        {/* Corpo della card */}
                        <div className="card-body d-flex flex-column justify-content-between">
                            {/* Titolo del film */}
                            <h5 className="card-title mt-2 mb-2">{title}</h5> {/* 8px di margine sopra e sotto */}
                            {/* Nome del regista */}
                            <p className="card-text text-white mt-2 mb-2"><small>{director}</small></p> {/* 8px di margine sopra e sotto */}
                            {/* Abstract del film */}
                            <p className="card-text mt-2 mb-2" style={{
                                maxHeight: "100px",
                                overflowY: "auto",
                                textOverflow: "ellipsis",
                                scrollbarWidth: "none", /* Per Firefox */
                                msOverflowStyle: "none" /* Per Internet Explorer/Edge */
                            }}>
                                {abstract}
                            </p> {/* 8px di margine sopra e sotto */}
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
