import Header from "../components/Header"
import Main from "../components/Main"
import { Outlet } from "react-router-dom"

export default function DefaultLayout() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}
