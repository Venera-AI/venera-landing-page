import FeedbackSection from "@/app/sections/feedback-section";
import WhySection from "@/app/sections/why-section";

export default function Home() {
  return (
    <main>
      <h1 className="sr-only">Home</h1>
      <FeedbackSection />
      <WhySection />
    </main>
  );
}
