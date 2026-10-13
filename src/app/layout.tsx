import type { Metadata } from "next";
import { Geist, Geist_Mono, Anton } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
});

export const metadata: Metadata = {
  title: "Cheam Norakpanha | Full-Stack Software Engineer",
  description:
    "Personal portfolio of Cheam Norakpanha, a Full-Stack Software Engineer specializing in React, Next.js, Spring Boot, and Cloud Applications. Building performant, clean, and scalable web solutions.",
  keywords: [
    "Cheam Norakpanha",
    "Norakpanha",
    "Software Engineer",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "Spring Boot",
    "Phnom Penh",
    "Cambodia",
  ],
  authors: [{ name: "Cheam Norakpanha" }],
  creator: "Cheam Norakpanha",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/cheamnorakpanha",
    title: "Cheam Norakpanha | Full-Stack Software Engineer",
    description:
      "Full-Stack Software Engineer specializing in React, Next.js, Spring Boot, and Cloud Applications.",
    siteName: "Cheam Norakpanha Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark h-full scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${anton.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
