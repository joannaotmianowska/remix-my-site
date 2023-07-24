import type { V2_MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: V2_MetaFunction = () => [{ title: "Joanna Otmianowska" }];

export default function Index() {
  return (
    <div className="bg-my-beige">
      <nav className="sticky top-0 bg-my-blue p-10 font-bold text-white flex justify-between">
        <h5 className="flex-none"><Link to="/">Joanna Otmianowska</Link></h5>
        <ul className="grow flex justify-end gap-x-11">
          
        <li className=""><Link to="">O mnie</Link></li>
        <li><Link to="/posts">Newslettery</Link></li>
        <li> <Link to="/podcasts">Odcinki podcastu</Link></li>
        <li> <Link to="">Instagram</Link></li>
        <li> <Link to="">Programuj, dziewczyno!</Link></li>
        <li>  <Link to="">Blog</Link></li>
          
        </ul>
      </nav>
      <main className="mx-auto w-screen bg-my-orange p-20">
        <div className="bg-my-orange flex-column container mx-auto flex max-w-7xl gap-20 bg-inherit sm:px-6 lg:px-8">
          <div className="bg-inherit">
            <img
              className="h-full w-full rounded-2xl object-cover"
              alt="main photo my portrait"
              src="https://github.com/joannaotmianowska/my-site/assets/20688756/e058e077-57e5-4d20-bac8-04c5a0ac39a4"
            />
          </div>
          <div className="text-left font-bold leading-loose tracking-tight">
            <h2 className="py-20 sm:text-4xl lg:text-5xl text-white">
              Kod. Nauka. Planowanie. Notatki. Macierzyństwo. Dobrostan. Balans.
              Odpoczynek.
            </h2>
            <div className="sm-text-2xl mb-10 cursor-pointer rounded-2xl bg-my-blue p-10 text-center lg:text-3xl text-white">
              <Link to="/posts">
                Archiwalne newslettery <br></br> "Pretekst do rozmyślań"
              </Link>
            </div>
            <div className="sm-text-2xl cursor-pointer rounded-2xl bg-my-blue p-10 text-center lg:text-3xl text-white">
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
