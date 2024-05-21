import ProgressBar from "@/ui/ProgressBar";
import Footer from "@/ui/Footer";
import Header from "@/ui/Header";
import type { Metadata } from "next";
import { Box } from "@mui/material";
import "./globals.css";
import SubNav from "@/ui/SubNav";
import { ContextProvider } from "@/ui/ContextProvider";
import { ReactNode } from "react";
import Script from "next/script";
// このglobals.cssがtailwindcssのスタイリング提供になっているので、
// これは外してはダメ！

const description =
  "We announce that the Kyushu Debate Open(QDO) resumes this year. We constructed a special website for this resume of the event.";

export const metadata: Metadata = {
  title: "Kyushu Debate Open 2024 - QDO 2024 ",
  description: description,
  openGraph: {
    type: "website",
    siteName: "QDO 2024",
    title: "QDO 2024",
    description: description,
    images: "https://kyushu-debate-open-2024.vercel.app/opengraph-image.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html>
      <head>
        <meta name="google-site-verification" content="_TyL-pvXZgYIY7v7S07182dPzNKGGgTSm3RXT1LGyEc" />
        <link rel="shortcut icon" href="/icon.ico" />
        <link rel="icon" href="/icon.ico" />
      </head>
      <body className="bg-[rgba(255,250,205,0.2)]">
        <ContextProvider>
          <ProgressBar />
          <Header />
          <SubNav />
          <Box component="main" minHeight="80vh">
            {children}
          </Box>
          <Footer />
        </ContextProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "QDO 2024",
              image: "https://kyushu-debate-open-2024.vercel.app/icon.ico",
              description: description,
            }),
          }}
        />
      </body>
    </html>
  );
}
