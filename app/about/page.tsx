import Navbar from "../components/navbar";
import Footer from "../components/footer";
import AboutSwiper from "../components/about-swiper";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans">
      <Navbar />

      <main className="flex-1">
        <AboutSwiper />

        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid items-start gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-2xl font-semibold text-black">
                Who We Are
              </h2>

              <p className="leading-relaxed text-gray-600">
                We are a team dedicated to creating modern and effective digital
                experiences. Our goal is to help clients build a strong online
                presence through high-quality design and development solutions.
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-semibold text-black">
                Our Mission
              </h2>

              <p className="leading-relaxed text-gray-600">
                Our mission is to provide creative, user-friendly, and reliable
                digital solutions that meet client needs while supporting
                business growth and innovation.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}