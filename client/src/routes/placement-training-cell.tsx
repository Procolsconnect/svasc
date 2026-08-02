import { CellPage } from "@/components/site/CellPage";
import { pageBySlug } from "@/data/site";

const page = pageBySlug("/placement-training-cell");



export default function RouteComponent() {
  return <CellPage page={page} />;
}
