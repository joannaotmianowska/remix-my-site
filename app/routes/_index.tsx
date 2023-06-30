import type { V2_MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: V2_MetaFunction = () => [{ title: "Joanna Otmianowska" }];

export default function Index() {
  return (
    <div className="bg-my-violet">
      <main className="container mx-auto bg-my-beige p-20">
        <div className="flex-column container mx-auto flex max-w-7xl gap-20 bg-inherit sm:px-6 lg:px-8">
          <div className="bg-inherit">
            <img
              className="h-full w-full rounded-2xl object-cover"
              src="https://github.com/joannaotmianowska/my-site/assets/20688756/e058e077-57e5-4d20-bac8-04c5a0ac39a4"
            />
          </div>
          <div className="text-left font-bold leading-loose tracking-tight">
            <h1 className="py-10 sm:text-6xl lg:text-7xl">
              Joanna Otmianowska
            </h1>
            <h2 className="py-20 sm:text-4xl lg:text-5xl">
              Kod. Nauka. Planowanie. Notatki. Macierzyństwo. Dobrostan. Balans.
              Odpoczynek.
            </h2>
            <div className="sm-text-2xl mb-10 cursor-pointer rounded-2xl bg-my-orange p-10 text-center lg:text-3xl">
              <Link to="/posts">
                Archiwalne newslettery <br></br> "Pretekst do rozmyślań"
              </Link>
            </div>
            <div className="sm-text-2xl cursor-pointer rounded-2xl bg-my-orange p-10 text-center lg:text-3xl">
              <Link to="/podcasts">
                Odcinki podcastu <br></br>"Pod pretekstem"
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
