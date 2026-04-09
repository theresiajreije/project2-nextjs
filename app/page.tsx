import Navbar from "./components/navbar";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-white font-sans">
        {/* Hero Section */}
        <section className="relative flex min-h-[350px] items-center justify-center overflow-hidden bg-[url('/banner2.jpg')] bg-cover bg-center bg-no-repeat px-6 text-center sm:min-h-[420px] lg:min-h-[498px]">
          <div className="absolute inset-0 bg-[rgba(80,80,80,0.45)]" />

          <div className="relative z-10 text-white">
            <h1 className="mb-3 font-[Poppins] text-3xl font-semibold sm:text-4xl lg:text-[36px]">
              Welcome to Our Website
            </h1>
            <p className="text-base font-semibold sm:text-lg lg:text-[19px]">
              Discover our amazing services and products.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-[#f3f3f3] px-6 pb-12 pt-8 text-center sm:px-10 lg:px-16 xl:px-24">
          <h2 className="mb-8 font-[Poppins] text-xl font-semibold text-black sm:text-2xl">
            Check Out Our Services
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {[1, 2, 3].map((service) => (
              <div
                key={service}
                className="mx-auto w-full max-w-[378px] rounded border border-[#d9d9d9] bg-white p-5 text-center shadow-[0_2px_8px_rgba(0,0,0,0.12)]"
              >
                <img
                  src="/banner2.jpg"
                  alt={`Service 0${service}`}
                  className="mx-auto mb-5 h-[220px] w-full rounded object-cover sm:h-[228px]"
                />

                <h3 className="mb-2 font-[Poppins] text-xl font-semibold text-[rgb(28,33,35)] sm:text-[21px]">
                  Service 0{service}
                </h3>

                <p className="font-[Poppins] text-sm font-semibold leading-6 text-[rgb(85,85,85)] sm:text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                  corrupti aspernatur nihil, tenetur tempora labore!
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-white px-6 py-8 text-center sm:px-10 lg:px-16 xl:px-24">
          <div className="mx-auto w-full max-w-4xl">
            <h2 className="mb-4 font-[Poppins] text-2xl font-semibold text-black">
              Contact
            </h2>

            <form className="w-full">
              <input
                type="text"
                placeholder="First Name"
                className="mb-5 h-[43px] w-full rounded border border-[#d9d9d9] px-3 font-[Poppins] text-sm font-semibold text-[rgb(85,85,85)] outline-none"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="mb-5 h-[43px] w-full rounded border border-[#d9d9d9] px-3 font-[Poppins] text-sm font-semibold text-[rgb(85,85,85)] outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="mb-5 h-[43px] w-full rounded border border-[#d9d9d9] px-3 font-[Poppins] text-sm font-semibold text-[rgb(85,85,85)] outline-none"
              />

              <button
                type="submit"
                className="mx-auto block h-[35px] w-[77px] rounded bg-[#1c2123] font-[Poppins] text-[13px] font-semibold text-white"
              >
                Submit
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}