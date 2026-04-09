import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Task 1",
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