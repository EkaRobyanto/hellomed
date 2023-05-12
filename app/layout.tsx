"use client";
import { Poppins } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import Providers from "./util/providers";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-black`}>
        <Providers>
          <Logo />
          {children}
        </Providers>
      </body>
    </html>
  );
}

function Logo() {
  return (
    <div className="bg-black w-fit mx-auto">
      <Link href={"/"}>
        <Image
          src={"/images/logo.png"}
          alt="logo"
          width={400}
          height={400}
          draggable={false}
        />
      </Link>
    </div>
  );
}
