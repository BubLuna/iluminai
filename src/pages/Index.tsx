
import React, { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Registration from "@/components/sections/Registration";
import EventInfo from "@/components/sections/EventInfo";
import Gallery from "@/components/sections/Gallery";
import Contribute from "@/components/sections/Contribute";
import FAQ from "@/components/sections/FAQ";

const Index = () => {
  useEffect(() => {
    // Scroll to top on initial load
    window.scrollTo(0, 0);

    // Optional: Add smooth scrolling for anchor links
    const handleScrollToAnchor = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target && target.tagName === "A" && target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          history.pushState(null, "", target.hash);
        }
      }
    };

    document.addEventListener("click", handleScrollToAnchor);
    return () => document.removeEventListener("click", handleScrollToAnchor);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Registration />
        <EventInfo />
        <Gallery />
        <Contribute />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
