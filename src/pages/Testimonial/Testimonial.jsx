import Container from "../../Components/Shared/Container/Container";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Testimonial.css";

import { Pagination } from "swiper/modules";

import img1 from "../../assets/Images/testimonial1.jpg";
import img2 from "../../assets/Images/testimonial2.jpg";
import img3 from "../../assets/Images/testimonial3.jpg";

const Testimonial = () => {
  return (
    <div>
      <Container>
        <div className="mt-32">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {/* slide-1 */}
            <SwiperSlide>
              <div className="bg-secondary text-text-color rounded-3xl shadow-sm p-10 text-left space-y-5 h-80">
                <h2 className="text-xl font-bold">
                  Expertise and Compassion Combined
                </h2>
                <p className="text-text-color-secondary text-sm">
                  I can not thank enough for their exceptional care. The doctors
                  and staff showed incredible expertise and compassion
                  throughout my treatment journey. I felt truly cared for every
                  step of the way.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10">
                    <img
                      className="rounded-full"
                      src={img1}
                      alt="user avatar"
                    />
                  </div>
                  <div>
                    <h6 className="text-lg font-bold text-text-color">
                      Sarah D,{" "}
                      <span className="text-text-color-secondary text-base font-normal">
                        IT Professional
                      </span>
                    </h6>
                    {/* Star */}
                    <div>
                      <div className="flex gap-0.5">
                        <svg
                          className="h-4 w-4 shrink-0 fill-amber-400"
                          viewBox="0 0 256 256"
                        >
                          <path d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z"></path>
                        </svg>
                        <svg
                          className="h-4 w-4 shrink-0 fill-amber-400"
                          viewBox="0 0 256 256"
                        >
                          <path d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z"></path>
                        </svg>
                        <svg
                          className="h-4 w-4 shrink-0 fill-amber-400"
                          viewBox="0 0 256 256"
                        >
                          <path d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z"></path>
                        </svg>
                        <svg
                          className="h-4 w-4 shrink-0 fill-amber-400"
                          viewBox="0 0 256 256"
                        >
                          <path d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z"></path>
                        </svg>
                        <svg
                          className="h-4 w-4 shrink-0 fill-amber-400"
                          viewBox="0 0 256 256"
                        >
                          <path d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/* slide-2 */}
            <SwiperSlide>
              <div className="bg-secondary text-text-color rounded-3xl shadow-sm p-10 text-left space-y-5 h-80">
                <h2 className="text-xl font-bold">
                  Life-Saving Care, Life-Changing Experience
                </h2>
                <p className="text-text-color-secondary text-sm">
                  My experience at Michael R, Business Executive was
                  life-changing. The prompt and accurate diagnosis, coupled with
                  the advanced treatments they provided, saved my life.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10">
                    <img
                      className="rounded-full"
                      src={img2}
                      alt="user avatar"
                    />
                  </div>
                  <div>
                    <h6 className="text-lg font-bold text-text-color">
                      Michael R,{" "}
                      <span className="text-text-color-secondary text-base font-normal">
                        Business Executive
                      </span>
                    </h6>
                    {/* Star */}
                    <div>
                      <div className="flex gap-0.5">
                        <svg
                          className="h-4 w-4 shrink-0 fill-amber-400"
                          viewBox="0 0 256 256"
                        >
                          <path d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z"></path>
                        </svg>
                        <svg
                          className="h-4 w-4 shrink-0 fill-amber-400"
                          viewBox="0 0 256 256"
                        >
                          <path d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z"></path>
                        </svg>
                        <svg
                          className="h-4 w-4 shrink-0 fill-amber-400"
                          viewBox="0 0 256 256"
                        >
                          <path d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z"></path>
                        </svg>
                        <svg
                          className="h-4 w-4 shrink-0 fill-amber-400"
                          viewBox="0 0 256 256"
                        >
                          <path d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z"></path>
                        </svg>
                        <svg
                          className="h-4 w-4 shrink-0 fill-amber-400"
                          viewBox="0 0 256 256"
                        >
                          <path d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/* slide-3 */}
            <SwiperSlide>
              <div className="bg-secondary text-text-color rounded-3xl shadow-sm p-10 text-left space-y-5 h-80">
                <h2 className="text-xl font-bold">
                  A Partner in Health and Wellness
                </h2>
                <p className="text-text-color-secondary text-sm">
                  As a busy professional, I appreciate the convenience and
                  quality of care I receive at David S, Lawyer. From
                  telemedicine consultations to routine check-ups, they have
                  become my trusted partner in health and
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10">
                    <img
                      className="rounded-full"
                      src={img3}
                      alt="user avatar"
                    />
                  </div>
                  <div>
                    <h6 className="text-lg font-bold text-text-color">
                      David S,{" "}
                      <span className="text-text-color-secondary text-base font-normal">
                        Lawyer
                      </span>
                    </h6>
                    {/* Star */}
                    <div>
                      <div className="flex gap-0.5">
                        <svg
                          className="h-4 w-4 shrink-0 fill-amber-400"
                          viewBox="0 0 256 256"
                        >
                          <path d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z"></path>
                        </svg>
                        <svg
                          className="h-4 w-4 shrink-0 fill-amber-400"
                          viewBox="0 0 256 256"
                        >
                          <path d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z"></path>
                        </svg>
                        <svg
                          className="h-4 w-4 shrink-0 fill-amber-400"
                          viewBox="0 0 256 256"
                        >
                          <path d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z"></path>
                        </svg>
                        <svg
                          className="h-4 w-4 shrink-0 fill-amber-400"
                          viewBox="0 0 256 256"
                        >
                          <path d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z"></path>
                        </svg>
                        <svg
                          className="h-4 w-4 shrink-0 fill-amber-400"
                          viewBox="0 0 256 256"
                        >
                          <path d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/* slide-1 */}
            <SwiperSlide>
              <div className="bg-secondary text-text-color rounded-3xl shadow-sm p-10 text-left space-y-5 h-80">
                <h2 className="text-xl font-bold">
                  Expertise and Compassion Combined
                </h2>
                <p className="text-text-color-secondary text-sm">
                  I can not thank enough for their exceptional care. The doctors
                  and staff showed incredible expertise and compassion
                  throughout my treatment journey. I felt truly cared for every
                  step of the way.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10">
                    <img
                      className="rounded-full"
                      src={img1}
                      alt="user avatar"
                    />
                  </div>
                  <div>
                    <h6 className="text-lg font-bold text-text-color">
                      Sarah D,{" "}
                      <span className="text-text-color-secondary text-base font-normal">
                        IT Professional
                      </span>
                    </h6>
                    {/* Star */}
                    <div>
                      <div className="flex gap-0.5">
                        <svg
                          className="h-4 w-4 shrink-0 fill-amber-400"
                          viewBox="0 0 256 256"
                        >
                          <path d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z"></path>
                        </svg>
                        <svg
                          className="h-4 w-4 shrink-0 fill-amber-400"
                          viewBox="0 0 256 256"
                        >
                          <path d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z"></path>
                        </svg>
                        <svg
                          className="h-4 w-4 shrink-0 fill-amber-400"
                          viewBox="0 0 256 256"
                        >
                          <path d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z"></path>
                        </svg>
                        <svg
                          className="h-4 w-4 shrink-0 fill-amber-400"
                          viewBox="0 0 256 256"
                        >
                          <path d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z"></path>
                        </svg>
                        <svg
                          className="h-4 w-4 shrink-0 fill-amber-400"
                          viewBox="0 0 256 256"
                        >
                          <path d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/* slide-2 */}
            <SwiperSlide>
              <div className="bg-secondary text-text-color rounded-3xl shadow-sm p-10 text-left space-y-5 h-80">
                <h2 className="text-xl font-bold">
                  Life-Saving Care, Life-Changing Experience
                </h2>
                <p className="text-text-color-secondary text-sm">
                  My experience at Michael R, Business Executive was
                  life-changing. The prompt and accurate diagnosis, coupled with
                  the advanced treatments they provided, saved my life.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10">
                    <img
                      className="rounded-full"
                      src={img2}
                      alt="user avatar"
                    />
                  </div>
                  <div>
                    <h6 className="text-lg font-bold text-text-color">
                      Michael R,{" "}
                      <span className="text-text-color-secondary text-base font-normal">
                        Business Executive
                      </span>
                    </h6>
                    {/* Star */}
                    <div>
                      <div className="flex gap-0.5">
                        <svg
                          className="h-4 w-4 shrink-0 fill-amber-400"
                          viewBox="0 0 256 256"
                        >
                          <path d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z"></path>
                        </svg>
                        <svg
                          className="h-4 w-4 shrink-0 fill-amber-400"
                          viewBox="0 0 256 256"
                        >
                          <path d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z"></path>
                        </svg>
                        <svg
                          className="h-4 w-4 shrink-0 fill-amber-400"
                          viewBox="0 0 256 256"
                        >
                          <path d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z"></path>
                        </svg>
                        <svg
                          className="h-4 w-4 shrink-0 fill-amber-400"
                          viewBox="0 0 256 256"
                        >
                          <path d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z"></path>
                        </svg>
                        <svg
                          className="h-4 w-4 shrink-0 fill-amber-400"
                          viewBox="0 0 256 256"
                        >
                          <path d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/* slide-3 */}
            <SwiperSlide>
              <div className="bg-secondary text-text-color rounded-3xl shadow-sm p-10 text-left space-y-5 h-80">
                <h2 className="text-xl font-bold">
                  A Partner in Health and Wellness
                </h2>
                <p className="text-text-color-secondary text-sm">
                  As a busy professional, I appreciate the convenience and
                  quality of care I receive at David S, Lawyer. From
                  telemedicine consultations to routine check-ups, they have
                  become my trusted partner in health and
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10">
                    <img
                      className="rounded-full"
                      src={img3}
                      alt="user avatar"
                    />
                  </div>
                  <div>
                    <h6 className="text-lg font-bold text-text-color">
                      David S,{" "}
                      <span className="text-text-color-secondary text-base font-normal">
                        Lawyer
                      </span>
                    </h6>
                    {/* Star */}
                    <div>
                      <div className="flex gap-0.5">
                        <svg
                          className="h-4 w-4 shrink-0 fill-amber-400"
                          viewBox="0 0 256 256"
                        >
                          <path d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z"></path>
                        </svg>
                        <svg
                          className="h-4 w-4 shrink-0 fill-amber-400"
                          viewBox="0 0 256 256"
                        >
                          <path d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z"></path>
                        </svg>
                        <svg
                          className="h-4 w-4 shrink-0 fill-amber-400"
                          viewBox="0 0 256 256"
                        >
                          <path d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z"></path>
                        </svg>
                        <svg
                          className="h-4 w-4 shrink-0 fill-amber-400"
                          viewBox="0 0 256 256"
                        >
                          <path d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z"></path>
                        </svg>
                        <svg
                          className="h-4 w-4 shrink-0 fill-amber-400"
                          viewBox="0 0 256 256"
                        >
                          <path d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </Container>
    </div>
  );
};

export default Testimonial;
