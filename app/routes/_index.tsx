import type { V2_MetaFunction } from "@remix-run/node";
import Navigation from "~/components/navigation";
import Main from "~/components/main";
import Footer from "~/components/footer";

export const meta: V2_MetaFunction = () => [{ title: "Joanna Otmianowska" }];

export default function Index() {
  return (
    <div className="min-h-screen bg-my-beige align-bottom">
      <Navigation />
      <Main />
      <Footer />
    </div>
  );
}
