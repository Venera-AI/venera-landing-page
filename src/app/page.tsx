import FeedbackSection from "@/app/sections/feedback-section";
import UsageSection from "@/app/sections/usage-section";

export default function Home() {
  return (
    <main>
      <h1 className="sr-only">Home</h1>
      <FeedbackSection />
      <UsageSection />
    </main>
  );
}
