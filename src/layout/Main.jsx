import { Outlet } from "react-router-dom";
import Nav from "../Components/Shared/Nabvar/Nav";

const Main = () => {
    return (
        <div>
            <Nav/>
            <Outlet/>
        </div>
    );
};

export default Main;