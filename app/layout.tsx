import type { Metadata } from "next";
// Temporarily disabled due to Turbopack font loading issue in Next.js 16
// import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { ThemeProvider } from "./components/ThemeProvider";

// const inter = Inter({
//   variable: "--font-inter",
//   subsets: ["latin"],
//   display: "swap",
// });

// const dmSans = DM_Sans({
//   variable: "--font-dm-sans",
//   subsets: ["latin"],
//   display: "swap",
// });

export const metadata: Metadata = {
  title: "Inflexion Co. - Innovative Software Solutions",
  description: "Building innovative software solutions and applications for the modern world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="antialiased flex flex-col min-h-screen font-sans"
      >
        <ThemeProvider>
          <Navigation />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
