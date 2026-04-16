import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Banner from "./components/banner";
import Services from "./components/services";
import FAQ from "./components/faq";
import Contact from "./components/contact";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-white font-sans">
        <Banner
          title="Welcome to Our Website"
          description="Discover our amazing services and products."
          backgroundImage="/banner2.jpg"
        />

        <Services />
        <Contact />
        <FAQ />
      </main>

      <Footer />
    </>
  );
}