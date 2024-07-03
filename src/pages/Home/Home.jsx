import Banner from "../../Components/Banner/Banner";
import Faq from "../../Components/Faq/Faq";
import Offer from "../../Components/Offer/Offer";
import StatComponent from "../../Components/StatComponent/StatComponnent";
import Mission from "../Mission/Mission";
import Service from "../Service/Service";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
    return (
        <div>
            <Banner/>
            <StatComponent/>
            <Mission/>
            <Service/>
            <Testimonial/>
            <Faq/>
            <Offer/>
        </div>
    );
};

export default Home;