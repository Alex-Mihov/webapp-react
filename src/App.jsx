// Importazione del layout di default
import DefaultLayout from "./layouts/DefaultLayout"

// Importazione delle pagine HomePage, MoviePage e NotFoundPage
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import NotFoundPage from "./pages/NotFoundPage";
import CreateMoviePage from "./pages/CreateMoviePage";

// Importazione dei componenti necessari per il routing da react-router-dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importazione dei file CSS di Bootstrap
import "bootstrap/dist/css/bootstrap.min.css"

// Definizione del componente App come funzione
function App() {
  return (
    <>
      {/* BrowserRouter avvolge l'intera applicazione per abilitare il routing */}
      <BrowserRouter>
        <Routes>
          {/* Definizione del layout di default per le rotte */}
          <Route element={<DefaultLayout />}>
            {/* Rotta principale che renderizza HomePage */}
            <Route index path="/" element={<HomePage />} />
            <Route path="/movies/create" element={<CreateMoviePage />} />
            {/* Rotta dinamica per i film che renderizza MoviePage */}
            <Route path="/movies/:id" element={<MoviePage />} />
            {/* Rotta per gestire le pagine non trovate che renderizza NotFoundPage */}
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

// Esportazione del componente App come default
export default App
