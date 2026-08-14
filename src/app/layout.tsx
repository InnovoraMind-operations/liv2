import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "Vorqentra Labs — We Compose Intelligence",
  description:
    "Vorqentra Labs is a premium consultancy specializing in Artificial Intelligence, Machine Learning, and Data Science. We compose intelligent systems with the precision of a master craftsman.",
  keywords: [
    "AI consultancy",
    "machine learning",
    "data science",
    "artificial intelligence",
    "Vorqentra Labs",
    "enterprise AI",
  ],
  authors: [{ name: "Vorqentra Labs" }],
  openGraph: {
    title: "Vorqentra Labs — We Compose Intelligence",
    description:
      "Premium AI, ML, and Data Science consultancy. Intelligence crafted with artisanal precision.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
