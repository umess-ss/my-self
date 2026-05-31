import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ClickSpark, GsapScrollEffects } from "@/components/ui/MotionEffects";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap"
});

export const metadata: Metadata = {
  title: {
    default: "Umesh Rajbanshi | Backend & Cloud Engineer",
    template: "%s | Umesh Rajbanshi"
  },
  description:
    "Portfolio of Umesh Rajbanshi, a Python backend and cloud engineer focused on APIs, infrastructure, and production-ready systems.",
  metadataBase: new URL("https://umeshrajbanshi.com.np"),
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Umesh Rajbanshi | Backend & Cloud Engineer",
    description:
      "Backend and cloud portfolio focused on APIs, infrastructure, deployment systems, and production-ready engineering.",
    url: "https://umeshrajbanshi.com.np",
    siteName: "Umesh Rajbanshi",
    type: "website"
  }
};

/* Inline script that runs before React hydrates to set the theme class.
   This prevents a flash of wrong theme on initial load. */
const themeInitScript = `
(function(){
  try {
    var saved = localStorage.getItem('portfolio-theme');
    var dark = saved ? saved === 'dark' : false;
    document.documentElement.classList.toggle('dark', dark);
  } catch(e) {}
})();
`;

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className={`${inter.variable} ${jetbrains.variable}`}>
        <ClickSpark>
          <GsapScrollEffects />
          <Navbar />
          {children}
          <Footer />
        </ClickSpark>
      </body>
    </html>
  );
}
