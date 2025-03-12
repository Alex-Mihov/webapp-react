// Importazione del layout di default
import DefaultLayout from "./layouts/DefaultLayout"

// Importazione delle pagine HomePage e MoviePage
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";

// Importazione dei componenti necessari per il routing da react-router-dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css"

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
            {/* Rotta dinamica per i film che renderizza MoviePage */}
            <Route path="/movies/:id" element={<MoviePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

// Esportazione del componente App come default
export default App
