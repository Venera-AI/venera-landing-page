import DashboardFeatureTemplate from "@/app/components/dashboard-feature-template";
import { useMessages } from "next-intl";

export default function DashboardFeature2() {
  const messages = useMessages();
  const { dashboard2 } = messages.homePage;
  return <DashboardFeatureTemplate content={dashboard2} />;
}
