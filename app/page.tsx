import Header from "./part1/page";
import Header2 from "./part2/page";
import About_me from "./part3/page";
import Work from "./work/page";
import { Footer } from "./footer/page";


export default function HomePage() {
  return (
    <main>
      <Header />
      <Header2 />
      <About_me />
      <Work />
      <Footer />
    </main>
  );
}