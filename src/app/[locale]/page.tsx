import ContactSection from "@/app/[locale]/sections/contact-section";
import DashboardFeature1 from "@/app/[locale]/sections/dashboard-section-1";
import DashboardFeature2 from "@/app/[locale]/sections/dashboard-section-2";
import FeaturesSection from "@/app/[locale]/sections/features-section";
import FeedbackSection from "@/app/[locale]/sections/feedback-section";
import HealthcareDataSection from "@/app/[locale]/sections/healthcare-data-section";
import HeroSection from "@/app/[locale]/sections/hero-section";
import IntroSection from "@/app/[locale]/sections/intro-section";
import PrivacySection from "@/app/[locale]/sections/privacy-section";
import WhySection from "@/app/[locale]/sections/why-section";
import { withLocale } from "@/with-locale";

export default withLocale(function Home() {
  return (
    <main>
      <h1 className="sr-only">Home</h1>
      <HeroSection />
      <HealthcareDataSection />
      <IntroSection />
      <FeaturesSection />
      <DashboardFeature1 />
      <DashboardFeature2 />
      <PrivacySection />
      <WhySection />
      <FeedbackSection />
      <ContactSection />
    </main>
  );
});
