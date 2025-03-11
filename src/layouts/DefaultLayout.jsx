// Importazione del componente Header
import Header from "../components/Header"

// Importazione del componente Outlet da react-router-dom
import { Outlet } from "react-router-dom"

// Definizione del componente DefaultLayout come funzione
export default function DefaultLayout() {
    return (
        <>
            {/* Renderizza il componente Header */}
            <Header />
            <main>
                {/* Outlet renderizza il contenuto della rotta figlia */}
                <Outlet />
            </main>
        </>
    )
}
