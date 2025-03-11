import DefaultLayout from "./layouts/DefaultLayout"

import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import GlobalContext from "./context/GlobalContext";

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {



  return (
    <>
      <GlobalContext.Provider>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route index element={<HomePage />} />
              <Route path="/movies/:id" element={<MoviePage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>

    </>
  )
}

export default App
