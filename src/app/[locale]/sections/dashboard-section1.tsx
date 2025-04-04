import DashboardFeatureTemplate from "@/app/components/dashboard-feature-template";
import { useMessages } from "next-intl";

export default function DashboardFeature1() {
  const messages = useMessages();
  const { dashboard1 } = messages.homePage;
  return <DashboardFeatureTemplate content={dashboard1} />;
}
