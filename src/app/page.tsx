import HealthcareDataSection from "./[locale]/sections/healthcare-data-section";
import FeedbackSection from "./[locale]/sections/feedback-section";
import FooterSection from "./[locale]/sections/footer-section";
import IntroSection from "./[locale]/sections/intro-section";
import WhySection from "./[locale]/sections/why-section";
import ContactSection from "./[locale]/sections/contact-section";
import PrivacySection from "./[locale]/sections/privacy-section";
import DashboardFeature1 from "./[locale]/sections/dashboard-section1";
import DashboardFeature2 from "./[locale]/sections/dashboard-section2";
export default function Home() {
  return (
    <main>
      <h1 className="sr-only">Home</h1>
      <HealthcareDataSection />
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
