import Navigation from "../navigation/Navigation";
import { Analytics } from "@vercel/analytics/react";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Analytics />
      <Navigation />
      {children}
    </div>
  );
}
