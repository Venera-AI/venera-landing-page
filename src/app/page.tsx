import FeedbackSection from "@/app/sections/feedback-section";
import HeroSection from "@/app/sections/hero-section";
import IntroSection from "@/app/sections/intro-section";
import WhySection from "@/app/sections/why-section";
import ContactSection from "@/app/sections/contact-section";
export default function Home() {
  return (
    <main>
      <h1 className="sr-only">Home</h1>
      <HeroSection />
      <IntroSection />
      <WhySection />
      <FeedbackSection />
      <ContactSection />
    </main>
  );
}
