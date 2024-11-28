import ServicePage from "@/components/packages/ServicePage";
import { servicePagesData } from "@/data";

export default function WordPressPage() {
  const { wordpress } = servicePagesData;
  return <ServicePage {...wordpress} />;
}
