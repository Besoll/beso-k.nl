import ServicePage from "@/components/packages/ServicePage";
import { servicePagesData } from "@/data";

export default function WebshopPage() {
  const webshopData = servicePagesData.webshop;
  return <ServicePage {...webshopData} />;
}