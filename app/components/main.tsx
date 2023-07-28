import { Link } from "@remix-run/react";

export default function Main() {
  return (
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
    </main>
  );
}
