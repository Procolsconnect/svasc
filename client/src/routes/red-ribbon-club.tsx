import { CellPage } from "@/components/site/CellPage";
import { pageBySlug } from "@/data/site";

const page = pageBySlug("/red-ribbon-club");

export default function RouteComponent() {
  return <CellPage page={page} />;
}
