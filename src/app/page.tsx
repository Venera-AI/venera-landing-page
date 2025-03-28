import FooterSection from "@/app/sections/footer-section";
import IntroSection from "@/app/sections/intro-section";
import WhySection from "@/app/sections/why-section";
import ContactSection from "@/app/sections/contact-section";
import FeedbackSection from "@/app/sections/feedback-section";
import DashboardFeature1 from "@/app/sections/dashboard-feature1";
import DashboardFeature2 from "@/app/sections/dashboard-feature2";
import PrivacySection from "@/app/sections/privacy-section";
export default function Home() {
  return (
    <main>
      <h1 className="sr-only">Home</h1>
      <IntroSection />
      <DashboardFeature1 />
      <DashboardFeature2 />
      <PrivacySection />
      <WhySection />
      <FeedbackSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
