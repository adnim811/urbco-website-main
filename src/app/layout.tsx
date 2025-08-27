import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "URB Consulting | University of Michigan",
  description:
    "URB Consulting is the first and only urban technology consulting organization at the University of Michigan. We deliver pro-bono client projects, professional development, and community.",
  metadataBase: new URL("https://urbconsulting.org"),
  openGraph: {
    title: "URB Consulting | University of Michigan",
    description:
      "The first and only urban technology consulting organization at U-M. Pro-bono projects. Professional development. Community.",
    type: "website",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "URB Consulting | University of Michigan",
    description:
      "Pro-bono urban tech consulting at U-M. Projects, professional development, and community.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}>
        <header className="sticky top-0 z-50 bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="h-15 w-15 rounded-md overflow-hidden relative">
                <Image src="/images/LogoFinal_normal_circle.png" alt="URB logo" fill className="object-contain p-1" />
              </div>
              <span className="text-3xl font-semibold tracking-tight">URB Consulting</span>
            </Link>
            <div className="flex items-center gap-8">
              <nav className="hidden md:flex items-center gap-8 text-sm text-muted">
                <Link href="/f25rush" className="hover:text-foreground transition-colors">F25 Rush</Link>
                <Link href="/about" className="hover:text-foreground transition-colors">About Us</Link>
              </nav>
              <Link href="https://tally.so/r/3q94Y9" target="_blank" rel="noopener noreferrer" className="hidden sm:inline-flex items-center rounded-full bg-urb-maize text-urb-blue font-medium px-4 py-2 shadow-[0_0_0_1px_rgba(255,203,5,0.3)] hover:shadow-[0_0_0_3px_rgba(255,203,5,0.2)] transition-shadow">Apply Now →</Link>
            </div>
          </div>
        </header>
        {children}
        <footer className="border-t border-white/10 mt-20">
          <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-md overflow-hidden relative">
                <Image src="/images/LogoFinal_custom_bg.png" alt="URB logo" fill className="object-contain p-1" />
              </div>
              <span>URB Consulting @ The University of Michigan</span>
            </div>
                          <div className="flex items-center gap-6">
                <a href="https://instagram.com/urb.consulting" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">Instagram</a>
                <a href="https://www.linkedin.com/company/urb-consulting" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">LinkedIn</a>
                <a href="mailto:urbumich@gmail.com" className="hover:text-foreground">urbumich@gmail.com</a>
              </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
