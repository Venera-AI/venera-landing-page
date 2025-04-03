import home from "@/content/home.json";
import DashboardFeatureTemplate from "@/app/components/dashboard-feature-template";

export default function DashboardFeature2() {
  const { dashboard2 } = home;
  return <DashboardFeatureTemplate content={dashboard2} />;
}
