import FeedbackSection from "@/app/sections/feedback-section";
import Contact from "@/sections/contact";
export default function Home() {
  return (
    <main>
      <h1 className="sr-only">Home</h1>
      <FeedbackSection />
      <Contact/>
    </main>
  );
}