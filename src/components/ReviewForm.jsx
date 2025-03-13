// Importazione di axios per effettuare richieste HTTP
import axios from "axios";
// Importazione dell'hook useState da React
import { useState } from "react";

// Definizione del componente ReviewForm come funzione
export default function ReviewForm({ movie_id, reloadReviews }) {

    // Valori iniziali del form
    const initialValue = {
        name: "",
        text: "",
        vote: 1
    }

    // Definizione dello stato formData
    const [formData, setFormData] = useState(initialValue);

    // Funzione per aggiornare i valori del form
    function setFieldValue(e) {
        const { value, name } = e.target;
        setFormData({ ...formData, [name]: value }); // Aggiorna il valore del campo nel formData
    }

    // Endpoint per inviare la recensione
    const endpoint = `http://localhost:3000/api/${movie_id}/reviews`;

    // Funzione per gestire l'invio del form
    function submitReview(e) {
        e.preventDefault(); // Previene il comportamento predefinito del form

        // Effettua una richiesta POST all'API per inviare la recensione
        axios.post(endpoint, formData)
            .then(
                () => {
                    setFormData(initialValue) // Resetta i campi del form
                    reloadReviews() // Ricarica le recensioni dopo l'invio
                }
            )
            .catch(err => console.log(err)) // Log degli errori
    }

    return (
        <>
            {/* Contenitore principale del form */}
            <div className="container d-flex justify-content-center align-items-center vh-75 mt-2 mb-2">
                <div className="col-md-6 text-center">
                    <h2>Feedback</h2>
                    {/* Form per inviare una recensione */}
                    <form onSubmit={submitReview}>
                        <div className="mb-3">
                            <label className="form-label">Nome</label>
                            {/* Campo di input per il nome */}
                            <input
                                name="name"
                                value={formData.name}
                                onChange={setFieldValue}
                                type="text"
                                className="form-control"
                                placeholder="Nome" required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Testo</label>
                            {/* Campo di textarea per il testo della recensione */}
                            <textarea
                                name="text"
                                value={formData.text}
                                onChange={setFieldValue}
                                className="form-control" rows="3"
                                placeholder="Recensione" required>
                            </textarea>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Voto</label>
                            {/* Campo di input per il voto */}
                            <input
                                name="vote"
                                value={formData.vote}
                                onChange={setFieldValue}
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