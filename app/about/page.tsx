import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Banner from "../components/banner";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white font-sans">
        <Banner
           title="About Us"
           description="Learn more about our company, our values, and our mission to deliver excellent digital solutions."
           backgroundImage="/banner2.jpg"
        />

        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-12 md:grid-cols-2 items-start">
            
            <div>
              <h2 className="mb-4 text-2xl font-semibold text-black">
                Who We Are
              </h2>

              <p className="text-gray-600 leading-relaxed">
                We are a team dedicated to creating modern and effective digital
                experiences. Our goal is to help clients build a strong online
                presence through high-quality design and development solutions.
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-semibold text-black">
                Our Mission
              </h2>

              <p className="text-gray-600 leading-relaxed">
                Our mission is to provide creative, user-friendly, and reliable
                digital solutions that meet client needs while supporting
                business growth and innovation.
              </p>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}