import Navigation from "../navigation/Navigation";
import { Analytics } from "@vercel/analytics/react";
import { Figtree } from "next/font/google";

const figree = Figtree({ subsets: ["latin"] });
import "./globals.css";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={figree.className}>
      <Analytics />
      <Navigation />
      {children}
    </div>
  );
}
