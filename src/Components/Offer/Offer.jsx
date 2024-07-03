import { Card, CardHeader, Typography } from "@material-tailwind/react";
import Container from "../Shared/Container/Container";
import { GoArrowUpRight } from "react-icons/go";
import logoWhite from "../../assets/Images/logo light.png";
import { Link } from "react-router-dom";

const Offer = () => {
  return (
    <div>
      <Container>
        <div className="mt-32">
          <Card className="relative grid h-[30rem] w-full md:max-w-full items-end justify-center overflow-hidden rounded-3xl">
            <CardHeader className="absolute inset-0 m-0 h-full w-full rounded-3xl bg-[url('https://i.ibb.co/VCYfYtt/Rectangle-32.png')] bg-cover bg-center">
              <div className="absolute h-full w-full rounded-xl flex items-center bg-gradient-to-r from-primary to-rgba(var(--primary), 0.3)">
                <div className="text-white pl-10">
                  <Typography className="text-4xl font-bold">
                    Get Your
                    <Typography className="text-4xl font-bold mt-4 mb-4">
                      First Appointment
                    </Typography>
                    <Typography className="text-4xl font-bold">
                      at 50% Off !
                    </Typography>
                  </Typography>
                  <Typography className="mt-10 flex flex-col md:flex-row  gap-6 ">
                  <Link to="/appointment">
                  <button className="bg-button-color px-4 py-3 rounded-xl flex gap-1 text-lg font-medium text-primary mx-auto">
                    Appointment
                    <GoArrowUpRight className="text-2xl font-medium" />
                  </button>
                  </Link>
                  <button className="bg-transparent border border-white px-4 py-3 rounded-xl flex gap-1 text-lg font-medium text-white mx-auto">
                     Learn More
                    <GoArrowUpRight className="text-2xl font-medium" />
                  </button>
                  </Typography>
                  <Typography className="absolute top-20 right-10">
                    <img src={logoWhite} alt="" />
                </Typography>
                </div>
                
              </div>
            </CardHeader>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default Offer;
