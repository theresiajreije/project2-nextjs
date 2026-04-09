export default function Footer() {
  return (
    <footer className="bg-[#f3f3f3] px-6 py-8 text-center sm:px-10 lg:px-16 xl:px-24">
      <h2 className="mb-3 font-[Poppins] text-2xl font-semibold text-[rgb(28,33,35)]">
        Footer Design
      </h2>

      <p className="mx-auto mb-6 max-w-[700px] font-[Poppins] text-sm font-semibold leading-6 text-[rgb(28,33,35)] sm:text-base">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores alias
        vel ullam cum, tenetur pariatur eos exercitationem? Alias sit, ullam
        iusto est labore voluptates amet adipisci incidunt? Ullam, saepe
        laboriosam?
      </p>

      <div className="mx-auto my-4 h-[2px] w-full max-w-[740px] bg-[#333]" />

      <div className="flex justify-center gap-5">
        <img src="/twitter.svg" alt="twitter" className="mt-2 h-[30px] w-[30px] cursor-pointer" />
        <img src="/facebook.svg" alt="facebook" className="mt-2 h-[30px] w-[30px] cursor-pointer" />
        <img src="/instagram.svg" alt="instagram" className="mt-2 h-[30px] w-[30px] cursor-pointer" />
      </div>
    </footer>
  );
}