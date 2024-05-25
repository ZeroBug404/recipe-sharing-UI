/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Bars3BottomRightIcon,
  // BookOpenIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { getUserInfo, removeUserInfo } from "../../services/auth.service";

const Navbar = () => {
  const { role } = getUserInfo() as any;
  const navigate = useNavigate();

  const Links = [
    { name: "Home", link: "/" },
    { name: "Recipes", link: "/recipes" },
  ];

  const LinksAfterLogin = [
    { name: "Home", link: "/" },
    { name: "Recipes", link: "/recipes" },
    { name: "Add Recipes", link: "/add-recipes" },
  ];

  const [open, setOpen] = useState(false);

  const handleLogout = (accessToken: string) => {
    removeUserInfo(accessToken);
    return navigate("/login");
  };

  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-10">
      <div
        className="md:flex items-center justify-between py-1 md:px-10 px-7"
        style={{
          background: "rgba(0,0,0,0)",
          backdropFilter: "blur(8px)",
        }}
      >
        {/* logo section */}
        {/* <BookOpenIcon className="w-7 h-7 text-blue-600" /> */}
        <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
          <Link to={"/"}>
            <img src={logo} className="w-[6rem]" alt="" />
          </Link>
        </div>
        {/* Menu icon */}
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-4 cursor-pointer md:hidden w-7 h-7"
        >
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
        {/* linke items */}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:bg-transparent bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-12 block" : "top-[-490px]"
          }`}
          style={{
            backdropFilter: "blur(8px)",
          }}
        >
          {!role &&
            Links.map((link, index) => (
              <li
                key={index}
                className="md:ml-8 md:my-0 my-7 font-semibold uppercase"
              >
                <Link
                  to={link.link}
                  className="text-gray-700 hover:text-[#017dfc] duration-500"
                >
                  {link.name}
                </Link>
              </li>
            ))}

          {role &&
            LinksAfterLogin.map((link, index) => (
              <li
                key={index}
                className="md:ml-8 md:my-0 my-7 font-semibold uppercase"
              >
                <Link
                  to={link.link}
                  className="text-gray-700 hover:text-[#017dfc] duration-500"
                >
                  {link.name}
                </Link>
              </li>
            ))}

          {role ? (
            <button
              onClick={() => handleLogout("accessToken")}
              className="btn border-2 border-[#21286a] text-[#21286a] hover:bg-[#21286a] hover:text-white md:ml-8  px-6 py-3 rounded-full duration-500 md:static text-sm"
            >
              Logout
            </button>
          ) : (
            <Link
              to={"/login"}
              style={{
                cursor: "pointer",
              }}
            >
              <button className="btn border-2 border-[#21286a] text-[#21286a] hover:bg-[#21286a] hover:text-white md:ml-8  px-6 py-3 rounded-full duration-500 md:static text-sm">
                Google Login
              </button>
            </Link>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
