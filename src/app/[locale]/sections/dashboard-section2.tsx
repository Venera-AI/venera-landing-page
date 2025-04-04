import { useMessages } from "next-intl";
import DashboardFeatureTemplate from "@/app/components/dashboard-feature-template";

export default function DashboardFeature2() {
  const dashboard = useMessages().homePage.dashboard2;
  return <DashboardFeatureTemplate content={dashboard} />;
}
