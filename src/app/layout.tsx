import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Anton } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { portfolioData } from "@/data/portfolio";

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

const { personal } = portfolioData;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#08080a",
};

export const metadata: Metadata = {
  title: `${personal.name} | ${personal.fullRole}`,
  description: `Personal portfolio of ${personal.name}, a ${personal.fullRole} specializing in React, Next.js, Spring Boot, and Cloud Applications. Building performant, clean, and scalable web solutions.`,
  keywords: [
    personal.name,
    "Norakpanha",
    "Software Engineer",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "Spring Boot",
    "Phnom Penh",
    "Cambodia",
  ],
  authors: [{ name: personal.name }],
  creator: personal.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: personal.socials.github,
    title: `${personal.name} | ${personal.fullRole}`,
    description: `${personal.fullRole} specializing in React, Next.js, Spring Boot, and Cloud Applications.`,
    siteName: `${personal.name} Portfolio`,
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
