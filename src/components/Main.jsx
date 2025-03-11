// Importa il componente Outlet dalla libreria react-router-dom
import { Outlet } from "react-router-dom"

// Esporta la funzione Main come componente principale
export default function Main() {
    return (
        <>
            {/* Inizia il contenitore principale */}
            <main>
                {/* Il componente Outlet renderizzerà i contenuti delle rotte figlio */}
                <Outlet />
            </main>
            {/* Fine del contenitore principale */}
        </>
    )
}