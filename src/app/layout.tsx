import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import ThemeRegistry from "@/styles/ThemeRegistry";
import Header from "@/components/Header";
import { headerUrls } from "@/constants/urls";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry options={{ key: "mui" }}>
          <>
            <Header urls={headerUrls} />
            {children}
          </>
        </ThemeRegistry>
      </body>
    </html>
  );
}
