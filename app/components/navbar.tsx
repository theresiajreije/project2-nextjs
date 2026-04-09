export default function Navbar() {
  return (
    <header className="bg-white">
      <div className="mx-auto flex min-h-[82px] w-full max-w-[1530px] flex-col items-center justify-between gap-4 px-6 py-4 sm:px-10 md:flex-row lg:px-16 xl:px-24">
        <div>
          <img src="/logo-bg.png" alt="Logo" className="h-[65px] w-auto sm:h-[80px]" />
        </div>

        <nav className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12">
          <a
            href="#"
            className="font-[Poppins] text-sm font-semibold text-[rgb(28,33,35)] no-underline sm:text-base"
          >
            HOME
          </a>
          <a
            href="#"
            className="font-[Poppins] text-sm font-semibold text-[rgb(28,33,35)] no-underline sm:text-base"
          >
            ABOUT
          </a>
          <a
            href="#"
            className="font-[Poppins] text-sm font-semibold text-[rgb(28,33,35)] no-underline sm:text-base"
          >
            CONTACT
          </a>
        </nav>
      </div>
    </header>
  );
}