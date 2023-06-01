import Loader from "components/Loader/Loader"
import { Suspense } from "react"

const { default: Header } = require("components/Header/header")
const { Outlet } = require("react-router-dom")

const Layout = () => {
    return (
        <>
        <Header />
        <Suspense fallback={<Loader/>}>
        <Outlet />
        </Suspense>
        </>
    )
}

export default Layout