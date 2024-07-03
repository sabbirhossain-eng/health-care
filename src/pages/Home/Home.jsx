import Banner from "../../Components/Banner/Banner";
import StatComponent from "../../Components/StatComponent/StatComponnent";
import Mission from "../Mission/Mission";
import Service from "../Service/Service";

const Home = () => {
    return (
        <div>
            <Banner/>
            <StatComponent/>
            <Mission/>
            <Service/>
        </div>
    );
};

export default Home;