import type { Metadata } from "next";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthSessionProvider from "@/components/AuthSessionProvider";

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
        <AuthSessionProvider>
          <ToastContainer />
          {children}
        </AuthSessionProvider>
      </body>
    </html>
  );
}
