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
