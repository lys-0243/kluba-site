import type { Metadata } from "next";
import "../globals.css";
import Footer from "@/components/minimals/Footer";


export const metadata: Metadata = {
  title: "Kluba - Investir, devenir grand",
  description:
    "Trouvez des opportunités d’investissement et les meilleurs conseils pour entreprendre ou accroître votre business.",
  applicationName: "Kluba",
  icons: {
    icon: "/img//logos/favicon.png",
  },
};



export default function AuthLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section className="bg-[url('/img/login.jpg')] bg-cover min-h-screen p-2 relative">
   
        {children}
      </section>
    )
  }