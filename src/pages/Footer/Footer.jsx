import { FaLinkedin, FaYoutube } from "react-icons/fa6";
import Container from "../../Components/Shared/Container/Container";
import logowhite from "../../assets/Images/logo light.png";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-primary py-4 text-white mt-32">
      <Container>
        <div className="container px-4 mx-auto">
          <div className="-mx-4 flex justify-between">
            <div className="px-2 my-4 w-full xl:w-1/5">
              <a href="/" className="block w-56 mb-10">
                <img src={logowhite} alt="" />
              </a>
              <p className="mb-10">
                123 Main Street Anytown, <br /> USA Postal Code: 12345
              </p>
              <p className="">
                Support: support@oyolloo.com <br /> (Available : 10:00am to 07:00pm)
              </p>
            </div>

            <div className="px-4 my-4 w-full sm:w-auto mt-20">
              <ul className="leading-8">
                <li>
                  <a href="/" className="hover:text-blue-400">
                   Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                  Success Page
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                  Terms and condition
                  </a>
                </li>
              </ul>
            </div>
            <div className="px-4 my-4 w-full sm:w-auto mt-20">
              <ul className="leading-8">
                <li>
                  <a href="#" className="hover:text-blue-400">
                  Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                  Scheduling
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                  Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                  Patient Portal
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full sm:w-auto mt-20">
              <div>
                <h2 className=" pb-1 mb-1">
                Follow Us
                </h2>
              </div>
              <div className="flex gap-4 lg:gap-6 w-full mb-4">
              <FaFacebook className="text-2xl font-bold"/>
              <FaInstagram className="text-2xl font-bold"/>
              <FaLinkedin className="text-2xl font-bold"/>
              <FaYoutube className="text-3xl font-bold"/>
              </div>
              <p>@docplus 2024</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
