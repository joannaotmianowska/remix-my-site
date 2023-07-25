import type { V2_MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { useState } from "react";

export const meta: V2_MetaFunction = () => [{ title: "Joanna Otmianowska" }];

export default function Index() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const openCloseNavbar = () => setNavbarOpen(navbarOpen ? false : true);

  return (
    <div>
      <nav className="sticky top-0 bg-my-beige font-bold text-black lg:flex lg:items-center lg:justify-between">
        <h5 className="mx-4 my-4 hidden flex-none hover:text-my-orange lg:block">
          <Link to="/">Joanna Otmianowska</Link>
        </h5>
        <div className="items-right flex justify-between">
          <span
            className="mx-4 cursor-pointer text-3xl hover:text-white lg:hidden"
            onClick={openCloseNavbar}
          >
            menu
          </span>
          <ul
            className={
              "absolute left-0 z-[-1] flex w-full grow flex-col bg-my-beige pt-10 opacity-0 transition-all duration-500 ease-in lg:static lg:z-auto lg:w-auto lg:flex-row lg:items-center lg:justify-end lg:py-0 lg:pl-0 lg:text-right lg:opacity-100" +
              (navbarOpen ? " opacity-100" : " opacity-0")
            }
            onMouseLeave={() => setNavbarOpen(false)}
          >
            <li className="cursor-pointer p-4 duration-500 hover:bg-my-orange hover:text-white lg:my-0 lg:w-auto">
              <Link to="">O mnie</Link>
            </li>
            <li className="cursor-pointer p-4 duration-500 hover:bg-my-orange hover:text-white lg:my-0">
              <Link to="/posts">Archiwalne newslettery</Link>
            </li>
            <li className="cursor-pointer p-4 duration-500 hover:bg-my-orange hover:text-white lg:my-0">
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
      <main className="mx-auto w-screen bg-my-beige p-20">
        <div className="flex-column max-w-8xl container mx-auto flex gap-20 bg-inherit sm:px-6 lg:px-8">
          <div className="bg-inherit">
            <img
              className="h-full w-full object-cover"
              alt="main my portrait"
              src="https://github.com/joannaotmianowska/my-site/assets/20688756/e058e077-57e5-4d20-bac8-04c5a0ac39a4"
            />
          </div>
          <div className="text-left font-bold leading-loose tracking-tight ">
            <h2 className="py-20 text-black sm:text-4xl lg:text-5xl">
              Kod. Nauka. Planowanie. Notatki. Macierzyństwo. Dobrostan. Balans.
              Odpoczynek.
            </h2>
            <div className="sm-text-2xl mb-10 cursor-pointer rounded-2xl bg-my-blue p-10 text-center text-white lg:text-3xl">
              <Link to="/posts">
                Archiwalne newslettery <br></br> "Pretekst do rozmyślań"
              </Link>
            </div>
            <div className="sm-text-2xl cursor-pointer rounded-2xl bg-my-blue p-10 text-center text-white lg:text-3xl">
              <Link to="/podcasts">
                Odcinki podcastu <br></br>"Pod pretekstem"
              </Link>
            </div>
          </div>
        </div>
      </main>
      <div className="sm:text-1xl mx-auto w-screen bg-my-violet p-20 text-left leading-loose text-white lg:text-2xl">
        <p className="container">
          Nazywam się Joanna Otmianowska. Szukam pretekstów do rozmyślań i
          rozmów. Programuję, piszę, ćwiczę jogę, staram się łapać balans i mam
          sto nowych pomysłów na minutę. Zachęcam kobiety do kodowania w FB
          grupie "Programuj, dziewczyno!", a na moim koncie na IG pokazuję moje
          poszukiwania dobrostanu. Teraz jestem na urlopie macierzyńskim, ale
          poza życiem mamy pracuję jako programistka. W nowej odsłonie mojego
          newslettera zapraszam Cię do wspólnego szukania pretekstów do
          rozmyślań. Oprócz tematów związanych z IT, pojawią się też takie
          związane z innymi aspektami życia. Masz ochotę razem porozkminiać?
          Zapisz się i widzimy się w Twojej skrzynce mailowej co dwa tygodnie w
          sobotni poranek.
        </p>
      </div>
    </div>
  );
}
