import { withLocaleHandling } from "@/with-locale-handling";
import FeedbackSection from "@/app/[locale]/sections/feedback-section";
import FooterSection from "@/app/[locale]/sections/footer-section";
import IntroSection from "@/app/[locale]/sections/intro-section";
import WhySection from "@/app/[locale]/sections/why-section";
import ContactSection from "@/app/[locale]/sections/contact-section";
import PrivacySection from "@/app/[locale]/sections/privacy-section";

export default withLocaleHandling(function Home() {
  return (
    <main>
      <h1 className="sr-only">Home</h1>
      <IntroSection />
      <PrivacySection />
      <WhySection />
      <FeedbackSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
});
