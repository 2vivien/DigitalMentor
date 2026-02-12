import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Stats } from "@/components/landing/Stats";
import { ProblemsSolutions } from "@/components/landing/ProblemsSolutions";
import { WhyChooseUs } from "@/components/landing/WhyChooseUs";
import { Features } from "@/components/landing/Features";
import { Domains } from "@/components/landing/Domains";
import { Mentors } from "@/components/landing/Mentors";
import { Showcase } from "@/components/landing/Showcase";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { DiscordCommunity } from "@/components/landing/DiscordCommunity";
import { Testimonials } from "@/components/landing/Testimonials";
import { Collaboration } from "@/components/landing/Collaboration";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-neo-yellow selection:text-black">
      <Navbar />
      <Hero />
      <Stats />
      <ProblemsSolutions />
      <WhyChooseUs />
      <Features />
      <Domains />
      <Showcase />
      <HowItWorks />
      <Mentors />
      <DiscordCommunity />
      <Testimonials />
      <Collaboration />
      <FinalCTA />
      <Footer />
    </main>
  );
}
