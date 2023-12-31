import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Nunito_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className=" px-4 md:px-10 bg-bg ">
          <Header />
          <main className="min-h-screen">{children}</main>
        </div>
      </body>
    </html>
  );
}
