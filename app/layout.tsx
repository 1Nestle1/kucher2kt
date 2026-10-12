import type { Metadata } from "next";
import { Manrope, Plus_Jakarta_Sans, Roboto } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MAC Digital Marketing Agency",
  description: "Award-winning SEO agency for digital marketing, design and website development.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${manrope.variable} ${roboto.variable}`}>
      <body>{children}</body>
    </html>
  );
}
