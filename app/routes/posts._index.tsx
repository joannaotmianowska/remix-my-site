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
      <Link to="admin" className="text-red-600 underline">
        Admin
      </Link>
      <h1>Tu będą newslettery</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link to={post.slug} className="text-blue-600 underline">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
      <Footer />
    </main>
  );
}
