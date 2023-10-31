import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { getPosts } from "~/models/post.server";
import Navigation from "~/components/navigation";
import Footer from '~/components/footer';

export const loader = async () => {
  return json({ posts: await getPosts() });
};

export default function Posts() {
  const { posts } = useLoaderData<typeof loader>();
  return (
    <main className="min-h-screen bg-my-beige flex flex-col">
      <Navigation highlighted={"newsletters"} />
      <div className="min-h-screen mx-4 bg-inherit lg:mx-10 lg:flex-row lg:gap-20 lg:py-20 text-center">
        <h1 className="my-6 border-b-2 text-3xl">Wybierz newsletter, który chcesz przeczytać</h1>
        <ul className="text-2xl">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link to={post.slug} className="cursor-pointer italic hover:underline hover:text-violet-600">
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </main>
  );
}
