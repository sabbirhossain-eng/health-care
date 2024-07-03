import Container from "../Shared/Container/Container";
import peiChart from "../../assets/Images/pie-chart.png";
import certified from "../../assets/Images/certified.png";
import star from "../../assets/Images/star.png";
import money from "../../assets/Images/coin.png";
import video from "../../assets/Images/video.png";
import { Avatar } from "@material-tailwind/react";

const StatComponent = () => {
  return (
    <div>
      <Container>
        <div className="flex flex-col md:flex-row justify-between gap-5 mt-4 md:items-end">
          {/* Stat-1 */}
          <div className="bg-white overflow-hidden shadow rounded-3xl w-52 h-72 mx-auto">
            <div className=" relative px-4 py-5">
              <dl>
                <dd className="mt-1 text-3xl leading-9 font-bold text-primary">
                  90%
                </dd>
                <dt className=" text-text-color mt-1">
                  Patient satisfaction rate, reflecting our commitment.
                </dt>
                <dt className="mt-4 absolute left-10 right-0">
                  <img src={peiChart} alt="" className="w-[75%]" />
                </dt>
              </dl>
            </div>
          </div>
          <div>
            <h2 className="text-2xl md:text-6xl font-semibold text-text-color text-center">Comprehensive Care
                <br /> for Every Patient</h2>
            <div className="flex flex-col md:flex-row justify-between gap-10 mt-4 md:items-end">
              {/* Stat-2 */}
              <div className="bg-secondary overflow-hidden shadow rounded-3xl w-52 h-48 mx-auto">
                <div className="px-4 py-5 relative">
                  <dl>
                    <dd className="mt-1 text-3xl leading-9 font-bold text-primary">
                      500+
                    </dd>
                    <dt className=" text-text-color mt-1">
                      Board-certified doctors
                    </dt>
                    <dt className="mt-6 absolute left-28 right-0">
                      <img src={certified} alt="" className="w-[70%]" />
                    </dt>
                  </dl>
                </div>
              </div>
              {/* Stat-3 */}
              <div className="bg-transparent overflow-hidden shadow-sm rounded-3xl w-52 h-40 mx-auto">
                <div className="px-4 py-5">
                  <dl>
                    <dd className="mt-1 text-3xl leading-9 font-bold text-primary flex items-end">
                      4.8
                      <img src={star} alt="" className="w-8" />
                    </dd>
                    <dt className=" text-text-color mt-1">
                      Over 20,000 Patient
                    </dt>
                    <dt className="mt-6 w-full">
                      <div className="flex items-center -space-x-4">
                        <Avatar
                          variant="circular"
                          alt="user 1"
                          className="border-2 border-white hover:z-10 focus:z-10 w-9 h-9 rounded-full"
                          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                        />
                        <Avatar
                          variant="circular"
                          alt="user 2"
                          className="border-2 border-white hover:z-10 focus:z-10 w-9 h-9 rounded-full"
                          src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                        />
                        <Avatar
                          variant="circular"
                          alt="user 3"
                          className="border-2 border-white hover:z-10 focus:z-10 w-9 h-9 rounded-full"
                          src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80"
                        />

                        <Avatar
                          variant="circular"
                          alt="user 4"
                          className="border-2 border-white hover:z-10 focus:z-10 w-9 h-9 rounded-full"
                          src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80"
                        />
                      </div>
                    </dt>
                  </dl>
                </div>
              </div>
              {/* Stat-4 */}
              <div className="bg-secondary overflow-hidden shadow rounded-3xl w-52 h-48 mx-auto">
                <div className="px-4 py-5 relative">
                  <dl>
                    <dd className="mt-1 text-3xl leading-9 font-bold text-primary">
                      $5000
                    </dd>
                    <dt className=" text-text-color mt-1">
                      Money spend for poor patient
                    </dt>
                    <dt className="absolute left-20 top-24 bottom-0 right-0">
                      <img src={money} alt="" className="w-[75%]" />
                    </dt>
                  </dl>
                </div>
              </div>
            </div>
          </div>
          {/* Stat-5 */}
          <div className="bg-white overflow-hidden shadow rounded-3xl w-52 h-72 mx-auto">
            <div className=" relative px-4 py-5">
              <dl>
                <dd className="mt-1 text-3xl leading-9 font-bold text-primary">
                  50+
                </dd>
                <dt className=" text-text-color mt-1">
                  Free lession video for patient
                </dt>
                <dt className="mt-4">
                  <img src={video} alt="" className="w-[75%] mx-auto" />
                </dt>
              </dl>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default StatComponent;
