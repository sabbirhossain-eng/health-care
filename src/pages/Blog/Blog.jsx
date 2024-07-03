import Container from "../../Components/Shared/Container/Container";
import img1 from "../../assets/Images/blog-1.jpg";
import img2 from "../../assets/Images/blog-2.jpg";
import img3 from "../../assets/Images/blog-3.jpg";
import ReadMore from "./ReadMore";
import user1 from "../../assets/Images/testimonial1.jpg";
import user2 from "../../assets/Images/testimonial2.jpg";
const Blog = () => {
  return (
    <div>
      <Container>
        <div className="mt-32">
          <button className="bg-secondary border border-black rounded-3xl px-4 py-2 mb-10 ">
            Blog
          </button>
          <div className="sm:grid lg:grid-cols-3 sm:grid-cols-2 gap-10">
            {/* Card-1 */}
            <div className="hover:bg-secondary  transition duration-300 max-w-sm rounded overflow-hidden shadow-lg">
              <div className="py-4 px-8">
                <img
                  src="https://tailwindcss.com/img/jonathan.jpg"
                  className="rounded-full h-12 w-12 mb-4"
                />
                <a href="#">
                  <h4 className="text-lg mb-3 font-semibold">
                    Your Comprehensive Health and Wellness Partner
                  </h4>
                </a>
                <p className="mb-2 text-sm text-gray-600 text-justify">
                  <ReadMore
                    text={
                      "At HealthCare+, we are dedicated to providing comprehensive and accessible healthcare solutions tailored to meet the diverse needs of individuals and families. Our mission is to empower you with the tools and resources necessary to achieve optimal health and well-being. We envision a world where quality healthcare is accessible to everyone, regardless of their location or financial status. By leveraging cutting-edge technology and innovative solutions, we aim to enhance the patient experience, streamline healthcare processes, and improve overall health outcomes. HealthCare+ offers a wide range of services, including comprehensive health resources, appointment scheduling, telemedicine services, personalized health tracking, and pharmacy integration. Join us on our journey towards better health and wellness."
                    }
                  />
                </p>
                <img src={img1} className="w-100" />
                <hr className="mt-4" />
                <span className="text-xs">ARTICLE</span>
                &nbsp;<span className="text-xs text-gray-500">PROCESS</span>
              </div>
            </div>
            {/* Card-2 */}
            <div className="hover:bg-secondary  transition duration-300 max-w-sm rounded overflow-hidden shadow-lg">
              <div className="py-4 px-8">
                <img src={user1} className="rounded-full h-12 w-12 mb-4" />
                <a href="#">
                  <h4 className="text-lg mb-3 font-semibold">
                    Empowering Your Health Journey with HealthCare+
                  </h4>
                </a>
                <p className="mb-2 text-sm text-gray-600 text-justify">
                  <ReadMore
                    text={
                      "At HealthCare+, our mission is to revolutionize the healthcare industry by leveraging cutting-edge technology and innovative solutions. We aim to enhance the patient experience, streamline healthcare processes, and improve overall health outcomes. Our comprehensive health resources, including medical articles, health tips, symptom checkers, and wellness guides, are designed to help you make informed decisions about your health. With our easy-to-use appointment scheduling feature, you can book appointments with healthcare providers, specialists, and clinics effortlessly. Experience the future of healthcare with HealthCare+."
                    }
                  />
                </p>
                <img src={img2} className="w-100" />
                <hr className="mt-4" />
                <span className="text-xs">ARTICLE</span>
                &nbsp;<span className="text-xs text-gray-500">PROCESS</span>
              </div>
            </div>
            {/* Card-3 */}
            <div className="hover:bg-secondary  transition duration-300 max-w-sm rounded overflow-hidden shadow-lg">
              <div className="py-4 px-8">
                <img src={user2} className="rounded-full h-12 w-12 mb-4" />
                <a href="#">
                  <h4 className="text-lg mb-3 font-semibold">
                    Connecting You to Care Anytime, Anywhere
                  </h4>
                </a>
                <p className="mb-2 text-sm text-gray-600 text-justify">
                  <ReadMore
                    text={
                      "In today's fast-paced world, convenience is key. HealthCare+ offers telemedicine services that allow you to connect with qualified healthcare professionals from the comfort of your home via secure video consultations. Whether you need medical advice, a follow-up appointment, or a prescription refill, our telemedicine services ensure you receive the care you need without the hassle of travel. Our commitment to patient-centered care means that we are always here for you, providing reliable and accessible healthcare solutions."
                    }
                  />
                </p>
                <img src={img3} className="w-100" />
                <hr className="mt-4" />
                <span className="text-xs">ARTICLE</span>
                &nbsp;<span className="text-xs text-gray-500">PROCESS</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Blog;
