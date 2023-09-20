import { Link } from "@remix-run/react";

export default function Footer() {
  return (
    <div className="mx-auto flex items-center justify-center bg-my-beige pb-10 pt-20 font-extralight">
      <hr></hr>
      <p className="text-m mx-4">
        &copy; 2023 Joanna Otmianowska. Wszystkie prawa zastrzeżone. Zdjęcie:{" "}
        <Link
          to="https://www.instagram.com/agatakochanekphotography"
          target="_blank"
          className="cursor-pointer underline underline-offset-4 duration-500 hover:underline-offset-2"
        >
          Agata Kochanek Photography
        </Link>
        .
      </p>
    </div>
  );
}
