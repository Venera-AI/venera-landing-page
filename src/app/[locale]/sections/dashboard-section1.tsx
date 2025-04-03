import home from "@/content/home.json";
import DashboardFeatureTemplate from "@/app/components/dashboard-feature-template";

export default function DashboardFeature1() {
  const { dashboard1 } = home;
  return <DashboardFeatureTemplate content={dashboard1} />;
}
