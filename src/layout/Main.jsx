import { Outlet } from "react-router-dom";
import Nav from "../Components/Shared/Nabvar/Nav";
import Container from "../Components/Shared/Container/Container";
import Footer from "../pages/Footer/Footer";

const Main = () => {
    return (
        <div>
            <Container>
            <Nav/>
            </Container>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;