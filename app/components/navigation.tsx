import { Link } from "@remix-run/react";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

type NavItems = {
  highlighted?: "newsletters" | "podcasts";
};

export default function Navigation({ highlighted }: NavItems) {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const openCloseNavbar = () => setNavbarOpen(navbarOpen ? false : true);

  return (
    <nav className="sticky top-0 bg-my-beige font-bold text-black shadow-sm lg:flex lg:items-center lg:justify-between">
      <h5 className="hidden flex-none px-4 py-4 hover:text-my-orange lg:block">
        <Link to="/">Joanna Otmianowska</Link>
      </h5>
      <div className="items-right flex justify-between bg-my-orange lg:bg-my-beige">
        <span
          className="mx-4 my-4 flex cursor-pointer justify-between text-3xl text-white lg:hidden"
          onClick={openCloseNavbar}
        >
          {navbarOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </span>
        <ul
          className={
            "absolute left-0 z-[-1] flex w-full grow flex-col bg-my-orange pt-12 text-white opacity-0 transition-all duration-500 ease-in lg:static lg:z-auto lg:w-auto lg:flex-row lg:items-center lg:justify-end lg:bg-my-beige lg:py-0 lg:pl-0 lg:text-right lg:text-black lg:opacity-100" +
            (navbarOpen ? " opacity-100" : " opacity-0")
          }
          onMouseLeave={() => setNavbarOpen(false)}
        >
          <li
            className={
              "cursor-pointer p-4 duration-500 hover:bg-my-orange hover:text-white lg:my-0" +
              (highlighted === "newsletters" && " bg-my-orange")
            }
          >
            <Link to="/posts">Archiwalne newslettery</Link>
          </li>
          <li
            className={
              "cursor-pointer p-4 duration-500 hover:bg-my-orange hover:text-white lg:my-0" +
              (highlighted === "podcasts" && " bg-my-orange")
            }
          >
            {" "}
            <Link to="/podcasts">Odcinki podcastu</Link>
          </li>
          <li className="cursor-pointer p-4 duration-500 hover:bg-my-orange hover:text-white lg:my-0">
            {" "}
            <Link
              to="https://www.instagram.com/joanna.otmianowska/"
              target="_blank"
            >
              Instagram
            </Link>
          </li>
          <li className="cursor-pointer p-4 duration-500 hover:bg-my-orange hover:text-white lg:my-0">
            {" "}
            <Link
              to="https://www.facebook.com/groups/programujdziewczyno"
              target="_blank"
            >
              Programuj, dziewczyno!
            </Link>
          </li>
          <li className="cursor-pointer p-4 duration-500 hover:bg-my-orange hover:text-white lg:my-0">
            {" "}
            <Link to="https://www.wakeupandcode.pl/" target="_blank">
              Blog
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
