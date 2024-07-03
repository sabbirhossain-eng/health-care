import Banner from "../../Components/Banner/Banner";
import Faq from "../../Components/Faq/Faq";
import Offer from "../../Components/Offer/Offer";
import StatComponent from "../../Components/StatComponent/StatComponnent";
import AboutUs from "../AboutUs/AboutUs";
import Mission from "../Mission/Mission";
import Service from "../Service/Service";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
    return (
        <div>
            <Banner/>
            <StatComponent/>
            <Mission/>
            <div id="services">
            <Service/>
            </div>
            <Testimonial/>
            <Faq/>
            <Offer/>
            <div id="aboutUs">
            <AboutUs/>
            </div>
        </div>
    );
};

export default Home;