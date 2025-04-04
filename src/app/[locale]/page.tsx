import { withLocale } from "@/with-locale";
import HealthcareDataSection from "@/app/[locale]/sections/healthcare-data-section";
import FeedbackSection from "@/app/[locale]/sections/feedback-section";
import FooterSection from "@/app/[locale]/sections/footer-section";
import IntroSection from "@/app/[locale]/sections/intro-section";
import WhySection from "@/app/[locale]/sections/why-section";
import ContactSection from "@/app/[locale]/sections/contact-section";
import PrivacySection from "@/app/[locale]/sections/privacy-section";
import LocaleSwitcher from "@/app/components/locale-switcher";
import DashboardFeature1 from "./sections/dashboard-section1";
import DashboardFeature2 from "./sections/dashboard-section2";
import FeaturesSection from "./sections/features-section";
export default withLocale(function Home() {
  return (
    <main>
      <h1 className="sr-only">Home</h1>
      {/* TODO move the locale switcher to Header. Temporary put here for testing */}
      <div className="bg-violet-300">
        <LocaleSwitcher />
      </div>
      <HealthcareDataSection />
      <IntroSection />
      <FeaturesSection />
      <DashboardFeature1 />
      <DashboardFeature2 />
      <PrivacySection />
      <WhySection />
      <FeedbackSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
});
