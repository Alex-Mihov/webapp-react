// Importazione di axios per effettuare richieste HTTP
import axios from "axios";
// Importazione dell'hook useState da React
import { useState } from "react";

// Definizione del componente ReviewForm come funzione
export default function ReviewForm({ movie_id, reloadReviews }) {

    return (
        <>
            {/* Contenitore principale del form */}
            <div className="container d-flex justify-content-center align-items-center vh-75 mt-2 mb-2">
                <div className="col-md-6 text-center">
                    <h2>Feedback</h2>
                    {/* Form per inviare una recensione */}
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Nome</label>
                            {/* Campo di input per il nome */}
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nome" required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Testo</label>
                            {/* Campo di textarea per il testo della recensione */}
                            <textarea
                                className="form-control" rows="3"
                                placeholder="Recensione" required>
                            </textarea>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Voto</label>
                            {/* Campo di input per il voto */}
                            <input
                                type="number"
                                placeholder="Voto"
                                className="form-control" min="1" max="5" required
                            />
                        </div>
                        {/* Bottone per inviare il form */}
                        <button type="submit"
                            className="btn btn-primary">
                            Invia
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}