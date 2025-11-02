import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "../globals.css";
import { AuthProvider } from "../admin-dashboard/AuthContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bakbakOne = localFont({
  src: "../../../public/fonts/BakbakOne-Regular.ttf",
  variable: "--font-bakbak-one",
  display: "swap",
});

const yatraOne = localFont({
  src: "../../../public/fonts/YatraOne-Regular.ttf",
  variable: "--font-yatra-one",
  display: "swap",
});

export default function AdminLoginLayout({ children }) {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  );
}
