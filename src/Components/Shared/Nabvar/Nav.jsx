import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../../assets/Images/logo dark.png";
import "./Nav.css";
import { GoArrowUpRight } from "react-icons/go";

const Nav = () => {
  const { pathname } = useLocation();
  const [openNav, setOpenNav] = useState(false);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography className="nav-link relative">
        <Link
          className={` ${
            pathname === "/"
              ? "text-primary"
              : "text-gray-700 dark:text-gray-200"
          } no-underline text-md  lg:hover:bg-none text-gray-800 dark:hover:text-white p-4 lg:p-0 inline-block rounded-[10px] w-full`}
          to={"/"}
        >
          Home
        </Link>
      </Typography>
      <Typography className="nav-link relative">
        <Link
          className={` ${
            pathname === "/services"
              ? "text-primary font-bold"
              : "text-gray-700 dark:text-gray-200"
          } no-underline  text-md text-gray-800 dark:hover:text-white p-4 lg:p-0 inline-block rounded-[10px] w-full`}
          to={"/services"}
        >
          Services
        </Link>
      </Typography>
      <Typography className="nav-link relative">
        <Link
          className={` ${
            pathname === "/blog"
              ? "text-primary font-bold"
              : "text-gray-700 dark:text-gray-200"
          } no-underline  text-md  lg:hover:bg-none text-gray-800 dark:hover:text-white p-4 lg:p-0 inline-block rounded-[10px] w-full`}
          to={"/blog"}
        >
          Blog
        </Link>
      </Typography>
      <Typography className="nav-link relative">
        <Link
          className={` ${
            pathname === "/contactUs"
              ? "text-primary font-bold"
              : "text-gray-700 dark:text-gray-200"
          } no-underline  text-md  lg:hover:bg-none text-gray-800  dark:hover:text-white p-4 lg:p-0 inline-block rounded-[10px] w-full`}
        >
          About Us
        </Link>
      </Typography>
    </ul>
  );

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= setOpenNav(false)
    );
  }, []);

  // reset

  const handleClick = () => {
    window.location.reset(true);
  };

  return (
    <div>
      <Navbar className="rounded-none mx-auto bg-transparent shadow-none border-none mt-2 mb-6">
        <div className="flex items-center justify-between text-nowrap">
          {/* logo */}
          <div>
          <Typography
            onClick={handleClick}
            as="a"
            href="/"
            className="mr-4 cursor-pointer py-1.5 flex-1"
          >
            <img src={logo} alt="logo" className="w-[70%]" />
          </Typography>
          </div>
            {/* nav list */}
            <div className="mr-4 hidden lg:block">{navList}</div>
            {/* Nav end */}
            <div className="hidden lg:block items-center gap-x-1 text-gray-800">
            <Typography className="flex items-end text-lg font-semibold border-2 border-primary rounded-xl mx-auto px-2 py-1">
              Appointment
              <GoArrowUpRight className="text-2xl font-extrabold"/>
            </Typography>
            </div>
            <IconButton
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent bg-transparent focus:bg-transparent active:bg-transparent lg:hidden text-gray-800 dark:text-gray-200"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
        </div>
        <MobileNav open={openNav}>
          {navList}
          <div className="no-underline  text-md text-gray-800 dark:hover:text-white p-4 lg:p-0 inline-block rounded-[10px]">
          <Typography className="flex items-end text-lg font-semibold border-2 border-primary rounded-xl mx-auto px-2 py-1">
              Appointment
              <GoArrowUpRight className="text-2xl font-extrabold"/>
            </Typography>
          </div>
        </MobileNav>
      </Navbar>
    </div>
  );
};

export default Nav;
