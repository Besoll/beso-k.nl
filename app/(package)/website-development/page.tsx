import ServicePage from "@/components/packages/ServicePage";
import { servicePagesData } from "@/data";

export default function WebsiteDevelopmentPage() {
  const websiteDevelopmentData = servicePagesData["website-development"];
  return <ServicePage {...websiteDevelopmentData} overview={websiteDevelopmentData.overview.join("\n")} />;
}

