import Footer from "@/components/minimals/Footer";
import MenuBG from "@/components/minimals/menuBg";
import type { Metadata } from "next";


export default function InvestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MenuBG />
      <main>{children}</main>
      <Footer />
    </>
  );
}
