export default function Hero() {
  return (
    <section className="relative flex min-h-[350px] items-center justify-center overflow-hidden bg-[url('/banner2.jpg')] bg-cover bg-center bg-no-repeat px-6 text-center sm:min-h-[420px] lg:min-h-[498px]">
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 text-white">
        <h1 className="mb-3 font-[Poppins] text-3xl font-semibold sm:text-4xl lg:text-[36px]">
          Welcome to Our Website
        </h1>
        <p className="text-base font-semibold sm:text-lg lg:text-[19px]">
          Discover our amazing services and products.
        </p>
      </div>
    </section>
  );
}