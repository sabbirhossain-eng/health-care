import { GoArrowUpRight } from "react-icons/go";
import Container from "../../Components/Shared/Container/Container";
import img from "../../assets/Images/AboutUs.jpg";
const AboutUs = () => {
  return (
    <div>
      <Container>
        <div className="mx-auto mt-32 p-10 bg-secondary rounded-3xl">
          <button className="bg-white border border-black rounded-3xl px-4 py-2 text-text-color">
            About Us
          </button>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="">
              <h2 className="text-4xl font-bold text-text-color">
              Welcome to HealthCare
              </h2>
              <p className="mt-4 text-text-color-secondary text-lg text-justify">
              Your trusted partner in health and wellness. At HealthCare+, we are dedicated to providing comprehensive and accessible healthcare solutions tailored to meet the diverse needs of individuals and families. Our mission is to empower you with the tools and resources necessary to achieve optimal health and well-being.
              </p>
              <div className="mt-8">
              <button className="bg-button-color px-4 py-3 rounded-xl flex gap-1 text-base">
              Learn More
              <GoArrowUpRight className="text-xl font-medium" />
            </button>
              </div>
            </div>
            <div className="mt-12 md:mt-0 mx-auto">
              <img
                src={img}
                alt="About Us"
                className="object-cover rounded-lg shadow-md w-[80%]"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;
