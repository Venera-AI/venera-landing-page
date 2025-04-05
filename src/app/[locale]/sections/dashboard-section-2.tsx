import { useMessages } from "next-intl";
import DashboardSectionTemplate from "@/app/components/dashboard-section-template";

export default function DashboardFeature2() {
  const dashboard = useMessages().homePage.dashboard2;
  const circleColor = "linear-gradient(135deg,#c6dff8,#efefef)";
  return (
    <DashboardSectionTemplate content={dashboard} circleColor={circleColor} />
  );
}
