import type { Metadata } from "next";
import LayoutWrapper from "./layoutWrapper";
import "./globals.css";

export const metadata: Metadata = {
  title: "Windows 11",
  description: "Mock Windows 11 built by Billy Joel Ballola",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://cse.google.com/cse.js?cx=419ef77e80b7e46dc"
          defer
        />
      </head>
      <body className="antialiased bg-zinc-900">
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
