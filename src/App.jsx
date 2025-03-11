import DefaultLayout from "./layouts/DefaultLayout"

import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";


import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {



  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index path="/" element={<HomePage />} />
            <Route path="/movies/:id" element={<MoviePage />} />
          </Route>
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
