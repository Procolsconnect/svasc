import { CellPage } from "@/components/site/CellPage";
import { pageBySlug } from "@/data/site";

const page = pageBySlug("/research-development-cell");



export default function RouteComponent() {
  return <CellPage page={page} />;
}
