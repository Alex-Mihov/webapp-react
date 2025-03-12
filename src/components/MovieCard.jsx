// Importazione del componente Link da react-router-dom
import { Link } from "react-router-dom"



// Definizione del componente MovieCard come funzione
export default function MovieCard({ movieProp }) {

    const { id, title, director, abstract, image } = movieProp;

    return (
        <>
            <div className="card mb-3 d-flex flex-column" style={{ maxWidth: "540px", height: "300px" }}>
                <div className="row g-0 h-100">
                    <div className="col-md-4 h-100">
                        {image && (
                            <img
                                src={image}
                                className="img-fluid rounded-start h-100 w-100"
                                alt={title}
                                style={{ objectFit: "cover" }}
                            />
                        )}
                    </div>
                    <div className="col-md-8 d-flex flex-column h-100">
                        <div className="card-body flex-grow-1">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text"><small className="text-body-secondary">{director}</small></p>
                            <p className="card-text text-truncate" style={{ maxHeight: "100px", overflow: "hidden" }}>
                                {abstract}
                            </p>
                        </div>
                        <div className="mt-auto text-end p-2">
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
