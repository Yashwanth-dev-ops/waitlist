import type { Metadata } from "next";
import { Space_Grotesk, Manrope } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Voxera AI — AI Voice Agents That Never Miss a Lead",
  description:
    "Automate your sales and support with human-like AI voice agents. Ultra-low latency, trained on your business data, zero hallucinations. Join the waitlist for early access.",
  keywords: [
    "AI voice agent",
    "voice automation",
    "lead qualification",
    "customer support AI",
    "logistics automation",
    "Voxera",
  ],
  openGraph: {
    title: "Voxera AI — AI Voice Agents That Never Miss a Lead",
    description:
      "Automate your sales and support with human-like AI voice agents. Join the waitlist.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${spaceGrotesk.variable} ${manrope.variable}`}>
      <body className="min-h-screen bg-bg-primary text-text-primary font-body antialiased">
        {children}
      </body>
    </html>
  );
}
