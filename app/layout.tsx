import { Red_Hat_Display, Red_Hat_Text } from "next/font/google";
import "../styles/globals.css";
import Footer from "./Footer";
import Navbar from "./Navbar";

const headFont = Red_Hat_Display({
  subsets: ["latin"],
  display: "optional",
  variable: "--font-head",
});
const bodyFont = Red_Hat_Display({
  subsets: ["latin"],
  display: "optional",
  variable: "--font-body",
});

export default function layout({ children }) {
  return (
    <html lang='en' className={`${headFont.variable} ${bodyFont.variable}`}>
      <body className="bg-light-200 text-light-700 flex flex-col justify-between min-h-screen">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
