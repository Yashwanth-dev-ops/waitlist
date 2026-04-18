"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AudioDemo from "@/components/AudioDemo";
import UseCases from "@/components/UseCases";
import Services from "@/components/Services";
import WaitlistForm from "@/components/WaitlistForm";
import Footer from "@/components/Footer";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Force scroll to top on reload/mount
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
      // Also try to prevent browser from restoring scroll position
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual';
      }
    }
  }, []);

  return (
    <>
      <Navbar />
      <main className="bg-[#000000]">
        <HeroSection />
        <AudioDemo />
        <UseCases />
        <Services />
        <WaitlistForm />
      </main>
      <Footer />
    </>
  );
}
