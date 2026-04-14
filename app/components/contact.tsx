export default function Contact() {
  return (
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
            className="mx-auto block h-[35px] w-[77px] cursor-pointer rounded bg-[#1c2123] font-[Poppins] text-[13px] font-semibold text-white"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}