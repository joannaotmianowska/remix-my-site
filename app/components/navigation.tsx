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
    <nav className="sticky top-0 my-0 flex items-stretch justify-between bg-my-orange py-0 font-bold text-black lg:bg-my-beige">
      <Link
        to="/"
        className="mx-2 my-2 flex max-h-10 flex-none cursor-pointer items-center justify-center px-4 py-4"
      >
        <img
          className="mr-3 hidden max-h-10 lg:block"
          alt="logo"
          src="https://github.com/joannaotmianowska/my-site/assets/20688756/7daa9edf-5a33-41c0-8685-df79e375d53f"
        />
        <img
          className="mr-3 block max-h-10 lg:hidden"
          alt="logo"
          src="https://github.com/joannaotmianowska/my-site/assets/20688756/2e43cec2-fcf5-4f77-a610-07e4246f32ce"
        />
        <span className="text-white lg:text-black">Joanna Otmianowska</span>
      </Link>
      <div className="items-right flex justify-between bg-my-orange lg:bg-my-beige">
        <span
          className="mx-4 my-4 flex cursor-pointer justify-between text-3xl text-white lg:hidden"
          onClick={openCloseNavbar}
          data-cy="nav-icon"
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
              (highlighted === "newsletters" && "bg-my-orange")
            }
          >
            <Link to="/posts">Archiwalne newslettery</Link>
          </li>
          <li
            className={
              "cursor-pointer p-4 duration-500 hover:bg-my-orange hover:text-white lg:my-0" +
              (highlighted === "podcasts" && "bg-my-orange")
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
