import ContactSection from "@/app/sections/contact-section";
import FeedbackSection from "@/app/sections/feedback-section";
import FooterSection from "@/app/sections/footer-section";
import IntroSection from "@/app/sections/intro-section";
import WhySection from "@/app/sections/why-section";
import metadata from "@/content/metadata.json";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  // TODO: handle returning metadata based on language
  return metadata;
}

export default function Home() {
  return (
    <main>
      <h1 className="sr-only">Home</h1>
      <IntroSection />
      <WhySection />
      <FeedbackSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
