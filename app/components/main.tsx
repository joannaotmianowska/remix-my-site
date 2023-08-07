export default function Main() {
  return (
    <>
      <main className="mx-auto w-screen bg-my-beige font-extralight">
        <div className="mx-4 flex flex-col items-center justify-center bg-inherit lg:mx-4 lg:flex-row lg:gap-20">
          <div className="lg:h-[55rem]">
            <img
              className="max-h-full object-contain lg:h-[55rem]"
              alt="main my portrait"
              src="https://github.com/joannaotmianowska/my-site/assets/20688756/e058e077-57e5-4d20-bac8-04c5a0ac39a4"
            />
          </div>
          <h5 className="text-xl leading-10 lg:max-w-lg lg:text-3xl">
            Cześć! Jestem Joanna. Szukam pretekstów do rozmyślań i rozmów.
            Programuję, piszę, robię kreatywne rzeczy, staram się łapać balans i
            mam sto nowych pomysłów na minutę. Piszę newslettery, w których
            zachęcam do wspólnego rozmyślania - możesz przeczytać je w archiwum
            albo zapisać się poniżej i dostawać je regularnie.
          </h5>
        </div>
      </main>
    </>
  );
}
