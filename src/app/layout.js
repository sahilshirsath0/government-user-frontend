import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ConditionalLayout from "./components/ConditionalLayout";
import { LanguageProvider } from "./context/LanguageContext"; // Add this import

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bakbakOne = localFont({
  src: "../../public/fonts/BakbakOne-Regular.ttf",
  variable: "--font-bakbak-one",
  display: "swap",
});

const yatraOne = localFont({
  src: "../../public/fonts/YatraOne-Regular.ttf",
  variable: "--font-yatra-one",
  display: "swap",
});

export const metadata = {
  title: "Gram Panchayat Yetgaon",
  description: "Official website for Gram Panchayat Yetgaon",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bakbakOne.variable} ${yatraOne.variable} antialiased`}
      >
        <LanguageProvider> {/* Add this wrapper */}
          <ConditionalLayout>
            {children}
          </ConditionalLayout>
        </LanguageProvider>
      </body>
    </html>
  );
}
