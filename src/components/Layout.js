import Container from "react-bootstrap/Container";

import Header from "./Header";
import Footer from "./Footer";

function Layout({ pages, onSetPage, children }) {
    return (
        <Container>
            <Header pages={pages} onSetPage={onSetPage} />
            <main>{children}</main>
            <Footer />
        </Container>
    );
}

export default Layout;