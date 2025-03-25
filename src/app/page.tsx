import FeedbackSection from "@/app/sections/feedback-section";
import PrivacySection from "@/app/sections/privacy-section";

export default function Home() {
  return (
    <div>
      <main>
        <h1 className="sr-only">Home</h1>
        <FeedbackSection />
      </main>

      <main>
        <h1 className="sr-only">Home</h1>
        <PrivacySection />
      </main>
    </div>
  );
}
