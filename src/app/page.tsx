import IntroSection from "@/app/sections/intro-section";
import WhySection from "@/app/sections/why-section";
import ContactSection from "@/app/sections/contact-section";
import FeedbackSection from "@/app/sections/feedback-section";
import PrivacySection from "@/app/sections/privacy-section";
export default function Home() {
  return (
    <main>
      <h1 className="sr-only">Home</h1>
      <IntroSection />
      <WhySection />
      <FeedbackSection />
      <ContactSection />
      <PrivacySection />
    </main>
  );
}
