import { Outlet } from "react-router-dom";
import Nav from "../Components/Shared/Nabvar/Nav";
import Container from "../Components/Shared/Container/Container";

const Main = () => {
    return (
        <div>
            <Container>
            <Nav/>
            </Container>
            <Outlet/>
        </div>
    );
};

export default Main;