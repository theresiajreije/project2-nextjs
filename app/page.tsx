import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Services from "./components/services";
import Contact from "./components/contact";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-white font-sans">
        <Hero />
        <Services />
        <Contact />
      </main>

      <Footer />
    </>
  );
}