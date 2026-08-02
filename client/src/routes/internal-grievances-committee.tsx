import { CellPage } from "@/components/site/CellPage";
import { pageBySlug } from "@/data/site";

const page = pageBySlug("/internal-grievances-committee");



export default function RouteComponent() {
  return <CellPage page={page} />;
}
