import axios from "axios";

import { Link, useNavigate } from "react-router-dom"

import { useState } from "react";

const initialData = {
    title: "",
    director: "",
    abstract: "",
    image: null
}

const endpoint = "http://localhost:3000/api/movies";

export default function CreateMoviePage() {

    const navigate = useNavigate();

    const [newMovieForm, setNewMovieForm] = useState(initialData)

    function setFieldValue(e) {
        const { value, name } = e.target;
        if (name === "image") setNewMovieForm({ ...newMovieForm, image: e.target.files[0] });
        else setNewMovieForm({ ...newMovieForm, [name]: value })
    }

    function handleSubmit(e) {
        e.preventDefault();

        axios.post(endpoint, newMovieForm, { headers: { "Content-Type": "multipart/form-data" } })
            .then(
                () => { navigate("/") }
            )
            .catch(err => console.log(err))
    }

    return (
        <>
            <header className="border-bottom border-1 mb-4 bg-light p-3">
                <h1 className="text-muted">Aggiungi un nuovo Film</h1>
            </header>

            <div id="book-form" className="container bg-light p-4 rounded shadow-sm">
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="form-label text-muted">Title:</label>
                        <input
                            className="form-control"
                            name="title"
                            type="text"
                            value={newMovieForm.title}
                            onChange={setFieldValue}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="form-label text-muted">Director:</label>
                        <input
                            className="form-control"
                            name="director"
                            type="text"
                            value={newMovieForm.director}
                            onChange={setFieldValue}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="form-label text-muted">Image:</label>
                        <input
                            className="form-control"
                            name="image"
                            type="file"
                            onChange={setFieldValue}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="form-label text-muted">Abstract:</label>
                        <textarea
                            value={newMovieForm.abstract}
                            className="form-control"
                            name="abstract"
                            onChange={setFieldValue}
                            required
                        ></textarea>
                    </div>

                    <div className="border-top mb-3 pt-3 d-flex justify-content-between">
                        <Link className="btn btn-secondary" to="/">Indietro</Link>
                        <button className="btn btn-success" type="submit">
                            Aggiungi Film
                        </button>
                    </div>
                </form>
            </div>

        </>
    )
}
