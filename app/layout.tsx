import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "./comps/Header";
import Footer from "./comps/Footer";

const roboto = Roboto({
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Swellendam Electrical Solutions",
  description: "Your trusted partner in Swellendam for all electrical needs. We specialize in providing quality electrical solutions, offering professional wiring, accredited installation services, and a wide range of electrical supplies. Our expert team is dedicated to solving electrical issues and restoring your peace of mind with efficient and reliable services",
  keywords : [
    "Overberg Lighting and Electrical",
    "Electrician Swellendam",
    "Electrical Services Swellendam",
    "Lighting Solutions Swellendam",
    "Accredited Installers Swellendam",
    "Residential Electrical Services Swellendam",
    "Commercial Electrical Services Swellendam",
    "Solar Panel Installation Swellendam",
    "Electrical Maintenance Swellendam",
    "Swellendam Electrician Services",
    "Electrical Contractors"
  ],
  openGraph: {
    url: "https://overberglighting.co.za",
    type: "website",
    title: "Overberg Lighting & Electrical | Electrician Swellendam",
    description:
      "Overberg Lighting & Electrical - Your trusted electrician in Swellendam, offering reliable electrical services, installations, and repairs.",
    images: [
      {
        url: "https://i.ibb.co/74t7B2g/Logo.jpg",
        width: 1200,
        height: 630,
        alt: "Overberg Lighting & Electrical"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Overberg Lighting & Electrical | Electrician Swellendam",
    description:
      "Overberg Lighting & Electrical - Your trusted electrician in Swellendam, offering reliable electrical services, installations, and repairs.",
    creator: "@OverbergLighting",
    site: "@OverbergLighting",
    images: [
      {
        url: "https://i.ibb.co/74t7B2g/Logo.jpg",
        width: 1200,
        height: 630,
        alt: "Overberg Lighting & Electrical"
      }
    ]
  },
  alternates: {
    canonical: "https://overberglighting.co.za"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header/>
        <div className="w-[90%] md:w-[80%] mx-auto">
          {children}
        </div>
        <Footer/>
      </body>
    </html>
  );
}
