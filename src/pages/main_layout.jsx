import Footer from "./Layout/Footer";
import Header from "./Layout/Header";

const Layout = ({children}) => {
    return (
        <>
        <Header />
        <main>{children}</main>
        <Footer />
        </>
    )
}
export default Layout;