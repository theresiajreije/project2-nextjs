"use client";

import { useState } from "react";

const servicesData = [
  {
    id: 1,
    title: "Service 01",
    image: "/banner2.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum corrupti aspernatur nihil, tenetur tempora labore!",
  },
  {
    id: 2,
    title: "Service 02",
    image: "/banner2.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum corrupti aspernatur nihil, tenetur tempora labore!",
  },
  {
    id: 3,
    title: "Service 03",
    image: "/banner2.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum corrupti aspernatur nihil, tenetur tempora labore!",
  },
  {
    id: 4,
    title: "Service 04",
    image: "/banner2.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum corrupti aspernatur nihil, tenetur tempora labore!",
  },
  {
    id: 5,
    title: "Service 05",
    image: "/banner2.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum corrupti aspernatur nihil, tenetur tempora labore!",
  },
  {
    id: 6,
    title: "Service 06",
    image: "/banner2.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum corrupti aspernatur nihil, tenetur tempora labore!",
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState("All");

  const filteredServices =
    selectedService === "All"
      ? servicesData
      : servicesData.filter((service) => service.title === selectedService);

  return (
    <section className="bg-[#f3f3f3] px-6 pb-12 pt-8 text-center sm:px-10 lg:px-16 xl:px-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-8 font-[Poppins] text-xl font-semibold text-black sm:text-2xl">
          Check Out Our Services
        </h2>

        <div className="mb-10 flex justify-end">
          <select
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
            className="w-full max-w-[260px] rounded-md border border-[#d9d9d9] bg-white px-4 py-3 font-[Poppins] text-base font-medium text-[#555] outline-none"
          >
            <option value="All">All</option>
            {servicesData.map((service) => (
              <option key={service.id} value={service.title}>
                {service.title}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 justify-items-center gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="w-full max-w-[378px] rounded border border-[#d9d9d9] bg-white p-5 text-center shadow-[0_2px_8px_rgba(0,0,0,0.12)]"
            >
              <img
                src={service.image}
                alt={service.title}
                className="mx-auto mb-5 h-[220px] w-full rounded object-cover sm:h-[228px]"
              />

              <h3 className="mb-2 font-[Poppins] text-xl font-semibold text-[rgb(28,33,35)] sm:text-[21px]">
                {service.title}
              </h3>

              <p className="font-[Poppins] text-sm font-semibold leading-6 text-[rgb(85,85,85)] sm:text-base">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}