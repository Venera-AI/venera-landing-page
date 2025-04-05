import { useMessages } from "next-intl";
import DashboardSectionTemplate from "@/app/components/dashboard-section-template";

export default function DashboardFeature1() {
  const dashboard = useMessages().homePage.dashboard1;
  const circleColor = "linear-gradient(135deg,#f8ddc6,#efefef)";
  return (
    <DashboardSectionTemplate content={dashboard} circleColor={circleColor} />
  );
}
