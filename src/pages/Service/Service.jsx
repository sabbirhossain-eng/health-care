import { GoArrowUpRight } from "react-icons/go";
import Container from "../../Components/Shared/Container/Container";
import img1 from "../../assets/Images/Rectangle 27-2.png"
import img2 from "../../assets/Images/Rectangle 27-1.png"
import img3 from "../../assets/Images/Rectangle 27.png"
const Service = () => {
  return (
    <div>
      <Container>
        <div className="mt-32 bg-secondary p-10 rounded-3xl grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* card-1 */}
          <div className="">
            <button className="bg-white border border-black rounded-3xl px-4 py-2 mb-10 text-text-color">
              Service
            </button>
            <h2 className="text-4xl font-semibold text-text-color mb-10">
            Empowering Health, <br />
            Enriching Lives
            </h2>
            <p className="text-text-color-secondary mb-10">
            We are committed to providing high-quality, compassionate care to every patient we serve. Whatever your healthcare needs may be, you can trust us to be your partner in health and wellness.
            </p>
            <button className="bg-button-color px-4 py-3 rounded-xl flex gap-1 text-base">
            Appointment
              <GoArrowUpRight className="text-xl font-medium" />
            </button>
          </div>
          {/* card-2 */}
          <div className="md:relative">
              <img
                className="w-full rounded-3xl object-cover object-center"
                src={img1}
                alt="nature image"
              />
            <div className="bg-primary text-white w-[70%] px-4 py-5 rounded-3xl md:absolute md:bottom-4 md:left-5 space-y-4 bg-opacity-60">
            <h3 className="text-xl">Advanced Technology</h3>
            <div className="flex justify-between items-end gap-4">
            <p>Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision  
            </p>
            <button className="bg-button-color rounded-full h-12 w-12 px-2 p-3">
            <GoArrowUpRight className="text-3xl font-black text-white" />
            </button>
            </div>
            </div>
          </div>
          {/* card-3 */}
          <div className="md:relative">
              <img
                className="w-full rounded-3xl object-cover object-center"
                src={img2}
                alt="nature image"
              />
            <div className="bg-primary text-white w-[70%] px-4 py-5 rounded-3xl md:absolute md:bottom-4 md:left-5 space-y-4 bg-opacity-60">
            <h3 className="text-xl">Advanced Technology</h3>
            <div className="flex justify-between items-end gap-4">
            <p>Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision  
            </p>
            <button className="bg-button-color rounded-full h-12 w-12 px-2 p-3">
            <GoArrowUpRight className="text-3xl font-black text-white" />
            </button>
            </div>
            </div>
          </div>
          {/* card-4 */}
          <div className="md:relative">
              <img
                className="w-full rounded-3xl object-cover object-center"
                src={img3}
                alt="nature image"
              />
            <div className="bg-primary text-white w-[70%] px-4 py-5 rounded-3xl md:absolute md:bottom-4 md:left-5 space-y-4 bg-opacity-60">
            <h3 className="text-xl">Advanced Technology</h3>
            <div className="flex justify-between items-end gap-4">
            <p>Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision  
            </p>
            <button className="bg-button-color rounded-full h-12 w-12 px-2 p-3">
            <GoArrowUpRight className="text-3xl font-black text-white" />
            </button>
            </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Service;
