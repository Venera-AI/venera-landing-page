import FeedbackSection from "@/app/sections/feedback-section";
import HeroSection from "@/app/sections/hero-section";
export default function Home() {
  return (
    <main>
      <h1 className="sr-only">Home</h1>
      <HeroSection />
      <FeedbackSection />
    </main>
  );
}
