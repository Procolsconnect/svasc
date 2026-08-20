import { CellPage } from "@/components/site/CellPage";
import { pageBySlug } from "@/data/site";

const page = pageBySlug("/grievance-redressal-committee");

export default function RouteComponent() {
  return <CellPage page={page} />;
}
