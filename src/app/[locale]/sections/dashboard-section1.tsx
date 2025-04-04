import { useMessages } from "next-intl";
import DashboardFeatureTemplate from "@/app/components/dashboard-feature-template";

export default function DashboardFeature1() {
  const dashboard = useMessages().homePage.dashboard1;
  const circleColor = "linear-gradient(135deg,#f8ddc6,#efefef)";
  return (
    <DashboardFeatureTemplate content={dashboard} circleColor={circleColor} />
  );
}
