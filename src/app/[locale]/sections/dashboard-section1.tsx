import { useMessages } from "next-intl";
import DashboardFeatureTemplate from "@/app/components/dashboard-feature-template";

export default function DashboardFeature1() {
  const dashboard = useMessages().homePage.dashboard1;
  return <DashboardFeatureTemplate content={dashboard} />;
}
