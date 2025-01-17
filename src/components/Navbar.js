"use client";

import Link from "next/link";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useEffect, useRef, useState } from "react";
import { useModal } from "@/context/ModalContext";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [selectedItem, setSelectedItem] = useState("/");
  const navbar = useRef();
  const { openModal } = useModal();

  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset >= 200) {
        navbar.current.classList.add("shadow");
      } else {
        navbar.current.classList.remove("shadow");
      }
    };
  }, []);

  return (
    <div
      ref={navbar}
      className="bg-white text-black w-full z-50 fixed top-0 left-0 mb-10"
    >
      <div className="container px-5 md:px-16 flex items-center justify-between mx-auto">
        <Link href={"/"}>
          <Image 
            src="/logo-dgenny.png"
            alt="DGenny Logo"
            width={150}
            height={40}
            className="h-auto w-auto"
          />
        </Link>

        <div>
          <ul
            className={`${toggleMenu === true ? "left-0" : "-left-full"} bg-white text-black z-50 flex md:items-center gap-1 md:gap-5 lg:gap-10 md:relative absolute top-0 md:left-0 w-80 transition-all duration-500 h-screen md:w-auto md:h-auto flex-col md:flex-row shadow-2xl py-24 px-10 md:p-0 md:shadow-none`}
          >
            <button
              className="text-black md:hidden absolute top-6 right-5"
              onClick={() => setToggleMenu(false)}
            >
              <CloseOutlinedIcon />
            </button>
            {/* Menus temporariamente escondidos
            {["home", "features", "pricing", "testimonial"].map((link) => (
              <li
                key={link}
                className={`${
                  selectedItem === link ? "text-primary" : ""
                } capitalize border-b py-4 md:border-none md:py-0 hover:text-primary`}
                onClick={() => setSelectedItem(link)}
              >
                <Link href={`#${link}`}>{link}</Link>
              </li>
            ))} */}
            <div className="md:hidden mx-auto absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-3">
              <Link
                href="https://www.facebook.com/profile.php?id=100017192357822&sk"
                target="_blank"
              >
                <FacebookOutlinedIcon className="cursor-pointer hover:text-primary text-xl" />
              </Link>
              <Link
                target="_blank"
                href={"https://www.linkedin.com/in/naseem-khan-275275258/"}
              >
                <LinkedInIcon className="cursor-pointer hover:text-primary text-xl" />
              </Link>
              <Link target="_blank" href={"https://github.com/NaseemKhan005/"}>
                <GitHubIcon className="cursor-pointer hover:text-primary text-xl" />
              </Link>
              <Link
                target="_blank"
                href={"https://www.instagram.com/naseem_khan005/"}
              >
                <InstagramIcon className="cursor-pointer hover:text-primary text-xl" />
              </Link>
            </div>
          </ul>
        </div>

        <div className="flex items-center gap-2 sm:gap-4 md:gap-2 lg:gap-4">
          <button 
            onClick={openModal}
            className="capitalize text-sm sm:text-base border-2 hover:border-2 font-semibold sm:py-3 py-2 px-3 sm:px-6 text-primary border-primary hover:border-primary hover:bg-primary hover:text-white rounded-full"
          >
            Começe Aqui
          </button>
          <button
            aria-label="menu"
            className="text-black md:hidden"
            onClick={() => setToggleMenu(true)}
          >
            <MenuIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
