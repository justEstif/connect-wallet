import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { Providers } from "@/components/Providers";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "dHedge",
  description: "Take home assignment",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="container flex flex-col mx-auto max-w-4xl min-h-screen">
            <NavBar />
            <main className="flex-1 p-5">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
