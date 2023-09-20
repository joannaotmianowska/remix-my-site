import { Link } from "@remix-run/react";

export default function Main() {
  return (
    <>
      <main className="mx-auto w-screen bg-my-beige font-extralight">
        <div className="bg-inherit mx-4 lg:mx-4 flex flex-col lg:flex-row items-center justify-center lg:gap-20">
          <div className="lg:h-[55rem]">
            <img
              className="object-contain max-h-full lg:h-[55rem]"
              alt="main my portrait"
              src="https://github.com/joannaotmianowska/my-site/assets/20688756/e058e077-57e5-4d20-bac8-04c5a0ac39a4"
            />
          </div>
          <div className="flex flex-col">
            <h5 className="text-xl lg:text-3xl lg:max-w-lg leading-10 m-5">
            <b>Cześć!</b> Witaj na mojej stronie - nazywam się <b>Joanna Otmianowska</b>. Lubię szukać pretekstów do rozmyślań i
            rozmów. I zrobiłam z tego projekt, w którego skład wchodzi <b>podcast "Pod Pretekstem"</b> i <b>newsletter "Pretekst do rozmyślań"</b>.</h5>
            <hr></hr>
            <h5 className="text-xl lg:text-3xl lg:max-w-lg leading-10 m-5">
            Odcinki podcastu i notatki do nich znajdziesz <Link to="/podcasts" className="underline underline-offset-4 cursor-pointer duration-500 hover:underline-offset-2">tutaj</Link>, a newslettery poczytasz <Link to="/posts" className="underline underline-offset-4 cursor-pointer duration-500 hover:underline-offset-2">w archiwum</Link>. Chcesz dostawać je na bieżąco? <Link to="https://www.subscribepage.com/pretekst" target="_blank" className="underline underline-offset-4 cursor-pointer duration-500 hover:underline-offset-2">Dołącz do listy.</Link>
            </h5>
            <hr></hr>
            <h5 className="text-xl lg:text-3xl lg:max-w-lg leading-10 m-5">
              Poza tym programuję, piszę, robię kreatywne rzeczy, ćwiczę, staram się łapać balans i miewam sto nowych pomysłów na minutę. A obecnie jestem na urlopie macierzyńskim.
            </h5>
          </div>
          <div>
            
          </div>
        </div>
      </main>
    </>
  );
}


