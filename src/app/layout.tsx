import type { Metadata } from "next";
import "./globals.css";
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        {children}
      </body>
    </html>
  );
}
