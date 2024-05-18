import ProgressBar from "@/ui/ProgressBar";
import Footer from "@/ui/Footer";
import Header from "@/ui/Header";
import type { Metadata } from "next";
import { Box } from "@mui/material";
import "./globals.css";
import SubNav from "@/ui/SubNav";
import { ContextProvider } from "@/ui/ContextProvider";
import { ReactNode } from "react";
// このglobals.cssがtailwindcssのスタイリング提供になっているので、
// これは外してはダメ！

export const metadata: Metadata = {
  title: "Kyushu Debate Open 2024",
  description:
    "We announce that the Kyushu Debate Open(QDO) resumes this year. We constructed a special website for this resume of the event.",
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
      </head>
      <body>
        <ContextProvider>
          <ProgressBar />
          <Header />
          <SubNav />
          <Box component="main" minHeight="80vh">
            {children}
          </Box>
          <Footer />
        </ContextProvider>
      </body>
    </html>
  );
}
