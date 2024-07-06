import { Metadata } from "next";
import './globals.css'
import Aside from "@/components/Aside";


export const metadata: Metadata = {
  title: "Zenbytes github search",
  description: "zenbyetes project to search for github repositories",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="text-center min-[200px]:m-7">
        <div className="flex h-screen gap-7 w-10/12 max-w-responsive my-14 lg:mx-auto">
          <Aside />
          {children}
        </div>
      </body>
    </html>
  );
}
