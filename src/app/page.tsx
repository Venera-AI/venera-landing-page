import FeedbackSection from "@/app/sections/feedback-section";
import IntroSection from "@/app/sections/intro-section";

export default function Home() {
  return (
    <main>
      <h1 className="sr-only">Home</h1>
      <IntroSection />
      <FeedbackSection />
    </main>
  );
}
