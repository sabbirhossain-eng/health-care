import Container from "../../Components/Shared/Container/Container";
import { GoArrowUpRight } from "react-icons/go";
import img from "../../assets/Images/Rectangle 24.png"
const Mission = () => {
  return (
    <div>
      <Container>
        <div className="mt-32 flex flex-col md:flex-row gap-20 md:items-end">
          {/* left side */}
          <div className="md:w-[50%] mx-auto">
            <button className="bg-secondary border border-black rounded-3xl px-4 py-2 mb-10">
              Who we are
            </button>
            <h2 className="text-4xl font-semibold text-text-color mb-10">
              We Help To Get <br />
              Soultions
            </h2>
            <p className="text-text-color-secondary mb-10 text-wrap">
              We are proud to be a trusted healthcare provider in our community,
              and we look forward to serving you and your family with
              excellence, integrity, and compassion. Your health is our
              priority, and we are here for you every step of the way. We
              believe in treating each patient with dignity, respect, and
              empathy, ensuring that they receive the attention and care they
              deserve.
            </p>
            <button className="bg-button-color px-4 py-3 rounded-xl flex gap-1 text-base">
              Learn More
              <GoArrowUpRight className="text-xl font-medium" />
            </button>
          </div>
          {/* right side */}
          <div className="md:w-[50%] md:relative">
              <img
                className="h-96 w-full rounded-3xl object-cover object-center mx-auto"
                src={img}
                alt="nature image"
              />
            <div className="bg-text-color-secondary text-white w-[70%] px-6 py-8 rounded-3xl md:absolute md:-bottom-8 md:-left-20 space-y-4">
            <h3 className="text-2xl">Our mission is simple</h3>
            <p>To provide high-quality healthcare services that are accessible, personalized, and patient-centered.</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Mission;
