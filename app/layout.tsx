import "./globals.css";
import { ReactNode } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const metadata = {
  title: "project2 nextjs",
  description: "Homepage website built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}