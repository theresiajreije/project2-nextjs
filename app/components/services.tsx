export default function Services() {
  return (
    <section className="bg-[#f3f3f3] px-6 pb-12 pt-8 text-center sm:px-10 lg:px-16 xl:px-24">
      <h2 className="mb-8 font-[Poppins] text-xl font-semibold text-black sm:text-2xl">
        Check Out Our Services
      </h2>

      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 justify-items-center gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((service) => (
            <div
              key={service}
              className="w-full max-w-[378px] rounded border border-[#d9d9d9] bg-white p-5 text-center shadow-[0_2px_8px_rgba(0,0,0,0.12)]"
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
      </div>
    </section>
  );
}