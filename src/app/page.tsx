import ContactSection from "@/app/sections/contact-section";
import FeedbackSection from "@/app/sections/feedback-section";
import FooterSection from "@/app/sections/footer-section";
import IntroSection from "@/app/sections/intro-section";
import WhySection from "@/app/sections/why-section";
import PrivacySection from "@/app/sections/privacy-section";

import { Metadata } from "next";
import { getMetadata } from "@/utils/getMetadata";

export async function generateMetadata(): Promise<Metadata> {
  const metadata = getMetadata();
  return metadata;
}

export default function Home() {
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
}
