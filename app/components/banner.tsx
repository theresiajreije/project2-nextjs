type BannerProps = {
  title: string;
  description: string;
  backgroundImage?: string;
};

export default function Banner({
  title,
  description,
  backgroundImage = "/banner2.jpg",
}: BannerProps) {
  return (
    <section
      className="relative flex min-h-[350px] items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat px-6 text-center sm:min-h-[420px] lg:min-h-[498px]"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 max-w-3xl text-white">
        <h1 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
          {title}
        </h1>

        <p className="mx-auto max-w-2xl text-sm leading-7 sm:text-base lg:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}