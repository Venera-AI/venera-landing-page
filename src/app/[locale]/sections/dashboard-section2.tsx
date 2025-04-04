import { useMessages } from "next-intl";
import DashboardFeatureTemplate from "@/app/components/dashboard-feature-template";

export default function DashboardFeature2() {
  const dashboard = useMessages().homePage.dashboard2;
  const circleColor = "linear-gradient(135deg,#c6dff8,#efefef)";
  return (
    <DashboardFeatureTemplate content={dashboard} circleColor={circleColor} />
  );
}
