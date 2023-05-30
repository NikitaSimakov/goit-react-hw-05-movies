const { default: Header } = require("components/Header/header")
const { Outlet } = require("react-router-dom")

const Layout = () => {
    return (
        <>
        <Header />
        <Outlet />
        </>
    )
}

export default Layout