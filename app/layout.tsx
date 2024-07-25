import type { Metadata } from "next";
import {
  Inter,
  Montserrat_Alternates,
  Roboto,
} from "next/font/google";
import "./globals.css";

const monseratt = Montserrat_Alternates(
  {
    weight: [
      "100",
      "300",
      "500",
      "700",
      "900",
    ],
    subsets: ["latin", "cyrillic"],
  }
);

const inter = Inter({
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Paprika",
  description: "Cover-band Landing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={monseratt.className}>
        {children}
      </body>
    </html>
  );
}
