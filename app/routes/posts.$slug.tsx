import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { marked } from "marked";
import invariant from "tiny-invariant";
import Navigation from "~/components/navigation";
import Footer from "~/components/footer";

import { getPost } from "~/models/post.server";

export const loader = async ({ params }: LoaderArgs) => {
  invariant(params.slug, `params.slug is required`);

  const post = await getPost(params.slug);
  invariant(post, `Post not found: ${params.slug}`);

  const html = marked(post.markdown);
  return json({ html, post });
};

export default function PostSlug() {
  const { html, post } = useLoaderData<typeof loader>();
  return (
    <main className="min-h-screen font-extralight bg-my-beige">
      <Navigation highlighted={"newsletters"} />
      <div className="mx-4 bg-inherit lg:mx-10 lg:flex-row lg:gap-20 lg:py-20">
        <h1 className="my-6 border-b-2 text-center text-3xl">{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
      <Footer />
    </main>
  );
}
